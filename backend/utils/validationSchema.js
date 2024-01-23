const Joi = require("joi")
const passwordComplexity = require('joi-password-complexity') 
Joi.objectId = require("joi-objectid")(Joi)

module.exports.userRegisterValidation = (body) => {
    const schema = Joi.object({
        user_email : Joi.string().email().label("user_email").required(),
        user_name : Joi.string().min(1).max(30).label("user_name").required(),
        password : Joi.string().label("password").required()
    })
    return schema.validate(body)
}

module.exports.userLoginValidation = (body) => {
    const schema = Joi.object({
        user_email : Joi.string().email().label("user_email").required(),
        password : Joi.string().label("password").required()
    })
    return schema.validate(body)
}




