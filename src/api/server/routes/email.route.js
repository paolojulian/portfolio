const URL = require('../../APIRoutes')
const config = require('../config.json')
const router = require('./router')

class MissingParamError extends Error {
    constructor(...args) {
        super(...args)
        this.mesasge = 'Missing Fields'
        Error.captureStackTrace(this, MissingParamError)
    }
}
/**
 * SEND MAIL
 * /mail
 */
router.post(URL.mail, (req, res) => {
    const item = req.body
    try {
        if ( ! item.hasOwnProperty('name')){
            throw new MissingParamError()
        }
        if ( ! item.hasOwnProperty('email')){
            throw new MissingParamError()
        }
        if ( ! item.hasOwnProperty('message')){
            throw new MissingParamError()
        }


        const nodemailer = require('nodemailer')

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: config.mail.email,
                pass: config.mail.password
            }
        });
        
        var mailOptions = {
            from: config.mail.email,
            to: 'paolovincentarch@gmail.com',
            subject: 'PORFOLIO',
            text: `
                NAME: ${item.name}\n
                EMAIL: ${item.email}\n
                MESSAGE: ${item.message}
            `
        };

        transporter.sendMail(mailOptions, function(error, info){
            if (error) {
                // eslint-disable-next-line
                console.error(error)
                return res.JSONerror(error)
            }

            return res.JSONsuccess(info.response)
        });
    } catch (err) {
        // eslint-disable-next-line
        console.error(err)
        if (err instanceof MissingParamError) {
            return res.JSONincomplete()
        }
        return res.JSONerror()
    }
      
})
module.exports = router
