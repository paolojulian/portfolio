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

export class MyHash {
    /**
     * Converts the string into its hash form
     * @param {String} char 
     */
    getHashCode (char) {
        var hash = 0;
        if (this.length == 0) return hash;
        for (let i = 0; i < this.length; i++) {
            char = this.charCodeAt(i);
            hash = ((hash<<5)-hash)+char;
            hash = hash & hash; // Convert to 32bit integer
        }
        return hash;
    }

    /**
     * Shhh.
     */
    getCode (char) {
        const regA = /A/g;
        const regM = /M/g;

        let newChar;
        newChar = char.replace(regA, '#')
        newChar = char.replace(regM, '!')
        return newChar
    }
    /**
     * SHHhhh.
     */
    reverseCode (char) {
        const regNumberSign = /#/gi;
        const regExclamation = /!/gi;

        let reversedChar;
        reversedChar = char.replace(regNumberSign, 'A')
        reversedChar = char.replace(regExclamation, 'M')
        return reversedChar
    }
}