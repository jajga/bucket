const Joi = require('@hapi/joi');

//Sign up Validation of user 

const bucketValidation =  (data) => {

	const bucketSchema = Joi.object({
		bucketName : Joi.string().min(6).required()
	})

	return bucketSchema.validate(data);
}

	


//Login Validation of user 

const loginValidation =  (data) => {

	const loginSchema = Joi.object({
		userid : Joi.string().min(6).required(),
		password : Joi.string().min(6).required()				
	})

	return loginSchema.validate(data);
}


module.exports.bucketValidation =  bucketValidation;
module.exports.loginValidation =  loginValidation;	