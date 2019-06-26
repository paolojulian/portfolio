export class BlankFieldException extends Error{
    constructor (message, ...params) {
        super (...params)

        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, BlankFieldException);
        }

        this.name = 'BlankFieldException'
        this.message = message || 'Please fill in the missing fields.'
        this.date = Date.now()
    }
}

export class WrongEmailAddressException extends Error {
    constructor (message, ...params) {
        super(...params)

        this.name = 'BlankFieldException'
        this.message = message || 'Please enter the correct email address'
        this.date = Date.now()
    }
}