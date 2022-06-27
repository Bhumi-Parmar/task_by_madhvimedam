
class BadRequestException extends Error {
  constructor(message) {
    super();
    this.message = message || 'Error: Bad Request';
    this.status = HTTP_BAD_REQUEST;
  }
}

//export default BadRequestException;