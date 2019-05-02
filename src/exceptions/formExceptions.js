class BlankFieldException extends Error{
    constructor (...params) {
        super (...params)
        this.name = 'BlankFieldException'
        this.message = 'Please fill in the missing fields!'
        this.date = Date.now()
    }
}

export default {
    BlankFieldException
}