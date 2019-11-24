const Joi = require('@hapi/joi');

//Sign up Validation of user 

const bucketValidation =  (data) => {

	const bucketSchema = Joi.object({
		bucketName : Joi.string().min(2).required()
	})

	return bucketSchema.validate(data);
}

const todoValidation =  (data) => {

	const bucketSchema = Joi.object({
		bucketId : Joi.string().min(2).required(),
		todoTitle : Joi.string().min(2).required(),
		todoStatus : Joi.number()
	})

	return bucketSchema.validate(data);
}


module.exports.bucketValidation =  bucketValidation;
module.exports.todoValidation = todoValidation;