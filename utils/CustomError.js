// CustomError.js

// Custom error class for client errors (4xx)
class ClientError extends Error {
  constructor(message) {
    super(message);
    this.name = "ClientError";
    this.statusCode = 400; // Default status code
  }
}

// Custom error class for server errors (5xx)
class ServerError extends Error {
  constructor(message) {
    super(message);
    this.name = "ServerError";
    this.statusCode = 500; // Default status code
  }
}

// Export the custom error classes
module.exports = {
  ClientError,
  ServerError,
};
