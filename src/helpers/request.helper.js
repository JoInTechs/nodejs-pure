const URL = require('url');
const { IncomingMessage } = require('http');

const Request = require('../core/models/request.model');
const BadTypeError = require('../core/errors/bad-type.error');

function extract(incomingRequest) {
  if (incomingRequest instanceof IncomingMessage) {
    const url = URL.parse(incomingRequest.url, true);
    const method = incomingRequest.method;
    const headers = incomingRequest.headers;
    
    return new Request(url, url.protocol, url.pathname, url.query, method, headers);
  } else {
    throw new BadTypeError('Incorrect request type');
  }
}

module.exports = extract;