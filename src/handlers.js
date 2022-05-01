const handlers = {};
handlers.ping = (data, callback) => {
  callback(200, {data: 'Hello World!!'});
};
handlers.notFound = (data, callback) => {
  callback(404, {data: 'Requested path not found'});
};

module.exports = handlers;