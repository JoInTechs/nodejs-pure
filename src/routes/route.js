const handlers = require('../handlers');
const HTTPCode = require('../core/models/http-code.model');

const router = {
  '/': {
    'GET': ping
  },
  'notFound': notFound
};

class RouterMiddleware {
  static execute(request, response, callback) {
    
    if (isValidRequest) {
    
    } else {
    }
  }
}

module.exports = RouterMiddleware;