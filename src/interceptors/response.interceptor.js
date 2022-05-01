module.exports = {
  perform(outgoingMessage) {
    outgoingMessage.setHeader('Content-Type', 'application/json');
    outgoingMessage.setHeader('Accept', `text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8`);
    outgoingMessage.setHeader('Accept-Encoding', 'gzip, deflate, sdch, br');
    outgoingMessage.setHeader('Accept-Language', 'en-US,en;q=0.8');
    outgoingMessage.setHeader('Access-Control-Allow-Headers', 'Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
    outgoingMessage.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS, PATCH');
    outgoingMessage.setHeader('Access-Control-Allow-Origin', '*');
    outgoingMessage.setHeader('Access-Control-Max-Age', '3600');
  }
};