const Joi = require('joi')

module.exports = {
    register (req, res, next) {
        const schema = {
            email: Joi.string().email(),
            password: Joi.string().regex(
                new RegExp('^[a-zA-Z0-9]{8,32}$')
            )
        }
    
        const { error, value } = Joi.validate(req.body, schema)

        if(error) {

            switch (error.details[0].context.key) {
                case 'email':
                    res.status(400).send({
                        error: 'You must provide a valide email address'
                    })
                    break
                case 'password':
                    res.status(400).send({
                        error: `1- Your password must be of atleast 8 character long and not greater then 32 characters<br>2-It must contain ONLY lower case, upper case and numeric character`
                    })
                    break
                default:
                    res.status(400).send({
                        error: 'Invalid Information'
                    })
            }

        } else {
            next()
        }
    } 
}