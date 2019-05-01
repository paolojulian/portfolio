import axios from 'axios'
const API_URL = '/api'
let Axios = axios.create({
    baseURL: API_URL
})

export class MyAPI {
    xhr (func) {
        return new Promise((resolve, reject) => {
            func()
                .then(response => { APIValidate({ resolve, reject }, response) })
                .catch(message => { reject(message) })
        })
    }

    xhrPost (url, data, config) {
        var apiAxios = (config)
            ? () => Axios.post(url, data, config)
            : () => Axios.post(url, data)

        return this.xhr(apiAxios)
    }

    xhrPatch (url, data, config) {
        var apiAxios = config
            ? () => Axios.patch(url, data, config)
            : () => Axios.patch(url, data)

        return this.xhr(apiAxios)
    }

    xhrDelete (url, config) {
        var apiAxios = config
            ? () => Axios.delete(url, config)
            : () => Axios.delete(url)

        return this.xhr(apiAxios)
    }

    xhrGet (url, params) {
        var apiAxios = (params)
            ? () => Axios.get(url, { params })
            : () => Axios.get(url)

        return this.xhr(apiAxios)
    }

    xhrGetAll (urls) {
        let promises = []
        for (let i = 0, l = urls.length; i < l; i++) {
            promises.push(this.xhrGet(urls[i]))
        }
        let allPromise = Promise.all(promises)
        return allPromise
    }

    xhrUpload (url, payload) {
        const headers = { 'Content-Type': 'multipart/form-data' };
        const config = { headers }
        return this.xhrPost(url, payload, config);
    }
}

export function APIValidate ({ resolve, reject }, response) {
    const successCodes = [200, 201, 304, 204]
    // Check if response status_code is a success code
    if ( ! successCodes.includes(response.status)) reject();
    // IF has status and it's false
    if (response.data.hasOwnProperty('status') && !response.data.status) reject()

    resolve(response.data.data)
}
