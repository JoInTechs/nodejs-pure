// const handlers = require('./handlers');
import {ping, notFound} from './handlers';
const router = {
  '/': {
    'GET': ping
  },
  'notFound': notFound
};

module.exports = router;