class BadTypeError extends Error {
  constructor(message) {
    super(message);
  }
}

module.exports = BadTypeError;