class Request {
  #url;
  #path;
  #method;
  #headers;
  #query;
  #protocol;
  
  get url() {
    return this.#url;
  }
  
  get path() {
    return this.#path;
  }
  
  get method() {
    return this.#method;
  }
  
  get headers() {
    return this.#headers;
  }
  
  get query() {
    return this.#query;
  }
  
  get protocol() {
    return this.#protocol;
  }
  
  constructor(url, protocol, path, query, method, headers) {
    this.#url = url;
    this.#path = path;
    this.#method = method;
    this.#headers = headers;
    this.#query = query;
    this.#protocol = protocol;
  }
}

module.exports = Request;