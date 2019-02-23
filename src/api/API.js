import Axios from 'axios'

export class MyAPI {
    xhrPost (url, data, config) {
        var apiAxios = (config)
            ? () => Axios.post(url, data, config)
            : () => Axios.post(url, data)

        return new Promise((resolve, reject) => {
            apiAxios()
                .then(response => { APIValidate({ resolve, reject }, response) })
                .catch(message => { reject(message) })
        })
    }

    xhrGet (url, params) {
        return new Promise((resolve, reject) => {
            var apiAxios = (params)
                ? () => Axios.get(url, { params })
                : () => Axios.get(url)

            apiAxios()
                .then(response => {
                    APIValidate({ resolve, reject }, response)
                })
                .catch(message => { reject(message) })
        })
    }

    xhrGetAll (urls) {
        let promises = []
        for (let i = 0, l = urls.length; i < l; i++) {
            promises.push(this.xhrGet(urls[i]))
        }
        let allPromise = Promise.all(promises)
        return allPromise
    }
}

export function APIValidate ({ resolve, reject }, response) {
    if (response.status !== 200) reject()
    if (typeof response.data.status === 'undefined') reject()
    if ( ! response.data.status) reject()

    resolve(response.data.data)
}
