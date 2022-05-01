const helpers = require('../helpers');
const coreModels = require('../core/models');
const errorModels = require('../core/errors');
const BadTypeError = require('../core/errors/bad-type.error');

function parseIncomingRequest(incomingRequest) {
  const request = helpers.requestHelper(incomingRequest);
  const isInvalidRequest = typeof request.path === 'undefined' || typeof request.method === 'undefined';
  // TODO: Should handle method OPTIONS right here
  
  if (isInvalidRequest) {
    throw new BadTypeError('Incorrect request type');
  } else {
    return request;
  }
}

module.exports = {
  perform(incomingRequest, response) {
    try {
      return parseIncomingRequest(incomingRequest);
    } catch (error) {
      if (error instanceof errorModels.BadTypeError) {
        response.writeHead(coreModels.HTTPCode.BadRequest.description);
      } else {
        response.writeHead(coreModels.HTTPCode.InternalServerError.description);
      }
    }
  }
};