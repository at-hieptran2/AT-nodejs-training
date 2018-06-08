const HttpStatus = require('http-status');

class APIError extends Error {
  constructor(status = HttpStatus.INTERNAL_SERVER_ERROR, message) {
    super(message);
    this.name = this.constructor.name;
    this.status = status;
    this.message = message;
    this.isOperational = true;
    Error.captureStackTrace(this, this.constructor.name);
  }
}

module.exports = APIError;