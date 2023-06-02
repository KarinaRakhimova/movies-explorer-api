const NotFoundError = require('../errors/notFoundError');

const notFoundPage = (req, res, next) => {
  next(new NotFoundError());
};

module.exports = notFoundPage;
