class JsonResponse {
    constructor (status, data) {
        if (typeof status !== 'boolean') return
        this.status = status
        this.data = data
    }
}

module.exports = JsonResponse