const Joi = require("@hapi/joi");
const registerValidation = data =>{
    const schema = Joi.object({
        name: Joi.string().required(),
        email: Joi.string().email().required(),
        password: Joi.string().required()
    
    });

    return schema.validate(data);

    // const { error } = schema.validate(req.body);
    // if (error) return res.status(400).send(error.details[0].message);
}
const loginValidation = data =>{
    const schema = Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().required()
    
    });

    return schema.validate(data);

    // const { error } = schema.validate(req.body);
    // if (error) return res.status(400).send(error.details[0].message);
}


module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;


