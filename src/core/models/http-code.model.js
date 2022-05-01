class HTTPCode {
  static Ok = Symbol('200');
  static Created = Symbol('201');
  static BadRequest = Symbol('400');
  static NotFound = Symbol('404');
  static MethodNotAllow = Symbol('405');
  static InternalServerError = Symbol('404');
}

module.exports = HTTPCode;