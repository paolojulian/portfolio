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
                .then(response => { APIValidate({ resolve, reject }, response) })
                .catch(message => { reject(message) })
        })
    }
}

export function APIValidate ({ resolve, reject }, response) {
    if (response.status !== 200) reject()

    resolve(response.data)
}
