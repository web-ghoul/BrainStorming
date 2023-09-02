const Joi = require("joi");

const registerSchema = Joi.object({
  email: Joi.string().email().lowercase().required(),
  password: Joi.string().min(6).required(),
  username: Joi.string().required(),
});

const resetPasswordSchema = Joi.object({
  hashedUniqueString: Joi.string().required(),
  new_password: Joi.string().min(6).required(),
});

module.exports = {
  registerSchema,
  resetPasswordSchema,
};
