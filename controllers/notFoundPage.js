const NotFoundError = require('../errors/notFoundError');
const { NOTFOUND_ERROR_MESSAGE } = require('../utils/constants');

const notFoundPage = (req, res, next) => {
  next(new NotFoundError(NOTFOUND_ERROR_MESSAGE));
};

module.exports = notFoundPage;
