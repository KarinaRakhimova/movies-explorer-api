const mongoose = require('mongoose');
const validator = require('validator');
const { EMPTY_FIELD_MESSAGE, INCORRECT_FIELD_MESSAGE } = require('../utils/constants');

const movieSchema = new mongoose.Schema({
  country: {
    type: String,
    required: [true, EMPTY_FIELD_MESSAGE],
  },
  director: {
    type: String,
    required: [true, EMPTY_FIELD_MESSAGE],
  },
  duration: {
    type: Number,
    required: [true, EMPTY_FIELD_MESSAGE],
  },
  year: {
    type: String,
    required: [true, EMPTY_FIELD_MESSAGE],
  },
  description: {
    type: String,
    required: [true, EMPTY_FIELD_MESSAGE],
  },
  image: {
    type: String,
    required: [true, EMPTY_FIELD_MESSAGE],
    validate: {
      validator: (image) => validator.isURL(image),
      message: INCORRECT_FIELD_MESSAGE,
    },
  },
  trailerLink: {
    type: String,
    required: [true, EMPTY_FIELD_MESSAGE],
    validate: {
      validator: (image) => validator.isURL(image),
      message: INCORRECT_FIELD_MESSAGE,
    },
  },
  thumbnail: {
    type: String,
    required: [true, EMPTY_FIELD_MESSAGE],
    validate: {
      validator: (thumbnail) => validator.isURL(thumbnail),
      message: INCORRECT_FIELD_MESSAGE,
    },
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    required: [true, EMPTY_FIELD_MESSAGE],
    ref: 'user',
  },
  movieId: {
    type: Number,
    required: true,
  },
  nameRU: {
    type: String,
    required: [true, EMPTY_FIELD_MESSAGE],
  },
  nameEN: {
    type: String,
    required: [true, EMPTY_FIELD_MESSAGE],
  },
});

module.exports = mongoose.model('movie', movieSchema);
