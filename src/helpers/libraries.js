export class PageLoader {
    constructor (post = true, error = false, loading = false) {
        this.post = post
        this.error = error
        this.loading = loading
    }

    onLoad () {
        this.loading = true

        this.post = false
        this.error = false
    }

    onError () {
        this.error = false

        this.loading = false
        this.post = false
    }

    onPost () {
        this.post = true

        this.loading = false
        this.error = false
    }
}
