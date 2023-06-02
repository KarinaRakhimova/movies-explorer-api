const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const validator = require('validator');
const UnauthorizedError = require('../errors/unauthorizedError');
const {
  EMPTY_FIELD_MESSAGE, INCORRECT_FIELD_MESSAGE, MINLENGTH_ERROR_MESSAGE, MAXLENGTH_ERROR_MESSAGE,
} = require('../utils/constants');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, EMPTY_FIELD_MESSAGE],
    unique: true,
    validate: {
      validator: (email) => validator.isEmail(email),
      message: INCORRECT_FIELD_MESSAGE,
    },
  },
  password: {
    type: String,
    required: [true, EMPTY_FIELD_MESSAGE],
    select: false,
  },
  name: {
    type: String,
    required: [true, EMPTY_FIELD_MESSAGE],
    minlength: [2, MINLENGTH_ERROR_MESSAGE],
    maxlength: [30, MAXLENGTH_ERROR_MESSAGE],
  },
}, {
  toJSON: {
    useProjection: true,
  },
  toObject: {
    useProjection: true,
  },
});

userSchema.statics.findUserByCredentials = function (email, password) {
  return this.findOne({ email })
    .select('+password')
    .then((user) => {
      if (!user) {
        throw new UnauthorizedError();
      }
      return bcrypt.compare(password, user.password)
        .then((matched) => {
          if (!matched) {
            throw new UnauthorizedError();
          }
          return user;
        });
    });
};

module.exports = mongoose.model('user', userSchema);
