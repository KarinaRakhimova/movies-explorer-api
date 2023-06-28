const { ValidationError, CastError, DocumentNotFoundError } = require('mongoose').Error;

const {
  BAD_REQUEST_ERROR_CODE,
  NOTFOUND_ERROR_CODE,
  DEFAULT_ERROR_CODE,
  DUPLICATE_ERROR_CODE,
  DUPLICATE_ERROR_MESSAGE,
  DEFAULT_MESSAGE,
} = require('../utils/constants');

const errorHandler = (err, req, res, next) => {
  if (err instanceof ValidationError || err instanceof CastError) {
    res.status(BAD_REQUEST_ERROR_CODE).send({ message: DEFAULT_MESSAGE });
    return;
  }
  if (err instanceof DocumentNotFoundError) {
    res.status(NOTFOUND_ERROR_CODE).send({ message: DEFAULT_MESSAGE });
    return;
  }
  if (err.statusCode) {
    res.status(err.statusCode).send({ message: DEFAULT_MESSAGE });
    return;
  } if (err.code === 11000) {
    res.status(DUPLICATE_ERROR_CODE).send({ message: DUPLICATE_ERROR_MESSAGE });
    return;
  }
  res.status(DEFAULT_ERROR_CODE).send({ message: DEFAULT_MESSAGE });
  next();
};

module.exports = errorHandler;
