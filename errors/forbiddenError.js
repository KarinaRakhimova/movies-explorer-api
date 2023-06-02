const { FORBIDDEN_ERROR_CODE, FORBIDDEN_ERROR_MESSAGE } = require('../utils/constants');

module.exports = class ForbiddenError extends Error {
  constructor(message) {
    super(message);
    this.statusCode = FORBIDDEN_ERROR_CODE;
    this.message = FORBIDDEN_ERROR_MESSAGE;
  }
};
