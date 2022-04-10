const CustomAPIError = require('../errors/custom-api-error');
const {StatusCodes} = require('http-status-codes');

// eslint-disable-next-line no-unused-vars
const ErrorHandlerMiddleware = (err, req, res, next) => {
	if(err instanceof CustomAPIError) {
		return res.status(err.statusCode).json({message: err.message});
	}
	if(err.name === 'ValidationError' ) {
		return handleValidationError(err, res);
	}
	if(err.name === 'CastError' ) {
		return res.status(400).json({message: err.message});
	}

	console.log(err);
	res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({message: 'Try again latter'});
};

const handleValidationError = (err, res) => {
	let errors = Object.values(err.errors).map(el => el.message);
	let fields = Object.values(err.errors).map(el => el.path);
	const formattedErrors = errors.join(' ');
	if(errors.length > 1) {
		res.status(StatusCodes.BAD_REQUEST).send({message: formattedErrors, fields});
	} else {
		res.status(StatusCodes.BAD_REQUEST).send({message: formattedErrors, fields});
	}
};

module.exports = ErrorHandlerMiddleware;