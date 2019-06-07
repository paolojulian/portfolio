const AWS = require('aws-sdk')
const config = require('./hashed.config.json')
class MyHash {
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
        newChar = newChar.replace(regM, '!')
        return newChar
    }
    /**
     * SHHhhh.
     */
    reverseCode (char) {
        const regNumberSign = /@/gi;
        const regExclamation = /!/gi;

        let reversedChar;
        reversedChar = char.replace(regNumberSign, 'A')
        reversedChar = reversedChar.replace(regExclamation, 'M')
        return reversedChar
    }
}

const myHash = new MyHash();
const awsKey = {
    accessKeyId: myHash.reverseCode(config.aws.accessKeyId),
    secretAccessKey: myHash.reverseCode(config.aws.secretAccessKey)
}

const AWSconfig = async () => {
    try {
        AWS.config.update(awsKey);
    } catch (e) {
        // eslint-disable-next-line
        console.error(e);
    }
}

AWSconfig();

module.exports = new AWS.S3();