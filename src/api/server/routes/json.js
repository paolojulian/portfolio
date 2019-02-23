class JsonResponse {
    constructor (status, data) {
        if (typeof status !== 'boolean') return console.error('Wrong status: ' + status)
        this.status = status
        this.data = data
    }
}

module.exports = JsonResponse