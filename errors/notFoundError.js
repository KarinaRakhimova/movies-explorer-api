const { NOTFOUND_ERROR_CODE, NOTFOUND_ERROR_MESSAGE } = require('../utils/constants');

module.exports = class NotFoundError extends Error {
  constructor(message) {
    super(message);
    this.statusCode = NOTFOUND_ERROR_CODE;
    this.message = NOTFOUND_ERROR_MESSAGE;
  }
};
