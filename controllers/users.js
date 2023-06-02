const { NODE_ENV, JWT_KEY } = process.env;
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/users');
const { JWT_KEY_DEV } = require('../utils/config');
const { CREATED_CODE, SIGNIN_MESSAGE, SIGNOUT_MESSAGE } = require('../utils/constants');
// регистрация
const signup = (req, res, next) => {
  const {
    email, password, name,
  } = req.body;
  bcrypt.hash(password, 10)
    .then((hash) => User.create({
      email,
      password: hash,
      name,
    }))
    .then((user) => res.status(CREATED_CODE).send(user))
    .catch(next);
};
// авторизация
const signin = (req, res, next) => {
  const { email, password } = req.body;
  return User.findUserByCredentials(email, password)
    .then((user) => {
      const token = jwt.sign({ _id: user._id }, NODE_ENV === 'production' ? JWT_KEY : JWT_KEY_DEV, { expiresIn: '7d' });
      res.cookie('token', token, {
        maxAge: 3600000 * 24 * 7,
        httpOnly: true,
        sameSite: true,
      })
        .send({ message: SIGNIN_MESSAGE })
        .end();
    })
    .catch(next);
};
// выход
const signout = (req, res) => {
  res.clearCookie('token', {
    maxAge: 3600000 * 24 * 7,
    httpOnly: true,
    sameSite: true,
  });
  res.send({ message: SIGNOUT_MESSAGE });
};
// возвращает информацию о пользователе
const getUserInfo = (req, res, next) => {
  User.findById(req.user._id)
    .orFail()
    .then((user) => res.send(user))
    .catch(next);
};
// обновляет информацию о пользователе
const updateUserInfo = (req, res, next) => {
  const { _id } = req.user;
  User.findByIdAndUpdate(_id, req.body, {
    new: true,
    runValidators: true,
  })
    .orFail()
    .then((user) => res.send(user))
    .catch(next);
};

module.exports = {
  signup,
  signin,
  signout,
  getUserInfo,
  updateUserInfo,
};
