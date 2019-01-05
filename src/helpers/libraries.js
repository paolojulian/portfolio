export class Page {
    constructor (post = true, error = false, loading = false) {
        this.post = post
        this.error = error
        this.loading = loading
    }
}
