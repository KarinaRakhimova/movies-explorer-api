const { NODE_ENV, JWT_KEY } = process.env;
const jwt = require('jsonwebtoken');
const UnauthorizedError = require('../errors/unauthorizedError');
const { JWT_KEY_DEV } = require('../utils/config');

const auth = (req, res, next) => {
  const { token } = req.cookies;
  if (!token) {
    next(new UnauthorizedError());
  }
  let payload;
  try {
    payload = jwt.verify(token, NODE_ENV === 'production' ? JWT_KEY : JWT_KEY_DEV);
  } catch (err) {
    next(new UnauthorizedError());
  }
  req.user = payload;
  next();
};

module.exports = auth;
