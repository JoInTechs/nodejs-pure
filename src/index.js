'use strict';
const http = require('http');

const interceptors = require('./interceptors');
const router = require('./router');

const HTTPServer = http.createServer((incomingMessage, response) => {
  const request = interceptors.requestInterceptor.perform(incomingMessage, response);
  
  // TODO: Do something with the valid request
  const data = {
    pathName: pathName,
    method: reqMethod,
    headers: reqHeaders,
    payload: {}
  };
  
  route(data, (HTTPCode, payload) => {
    payload = typeof (payload) === 'object' ? payload : {};
    HTTPCode = typeof (HTTPCode) === 'number' ? HTTPCode : 200;
    const payloadString = JSON.stringify(payload);
    res.setHeader('content-type', 'application/json');
    res.writeHead(HTTPCode);
    res.end(payloadString);
  });
  
  // TODO: Consider await before
  interceptors.responseInterceptor.perform(response);
});

HTTPServer.listen(3000, () => console.log('HTTP Server is running on the port 3000'));
