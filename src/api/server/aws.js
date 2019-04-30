const AWS = require('aws-sdk')
const config = require('./config.json')

const AWSconfig = async () => {
    try {
        AWS.config.update({
            accessKeyId: config.aws.accessKeyId,
            secretAccessKey: config.aws.secretAccessKey
        });
    } catch (e) {
        // eslint-disable-next-line
        console.error(e);
    }
}

AWSconfig();

module.exports = new AWS.S3();