const Joi = require('joi');

const registerSchema = Joi.object({
  email_reg : Joi.string().email().lowercase().required(),
  password_reg : Joi.string().min(6).required(),
  username_reg : Joi.string().required(),

})

const resetPasswordSchema = Joi.object({
  hashedUniqueString : Joi.string().required(),
  new_password : Joi.string().min(6).required()
})




module.exports = {
  registerSchema,
  resetPasswordSchema,
}