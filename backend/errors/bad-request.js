const CustomAPIError = require('./custom-api-error');
const { StatusCodes } = require('http-status-codes');

class BadRequest extends CustomAPIError {
	constructor(message, fields = []) {
		super(message);
		this.statusCode = StatusCodes.BAD_REQUEST;
		this.fields = fields;
	}
}

module.exports = BadRequest;