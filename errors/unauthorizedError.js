const { UNAUTHORIZED_ERROR_CODE, UNAUTHORIZED_ERROR_MESSAGE } = require('../utils/constants');

module.exports = class UnauthorizedError extends Error {
  constructor(message) {
    super(message);
    this.statusCode = UNAUTHORIZED_ERROR_CODE;
    this.message = UNAUTHORIZED_ERROR_MESSAGE;
  }
};
