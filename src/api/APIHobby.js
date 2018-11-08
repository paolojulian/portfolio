import axios from 'axios'
import { API_URL } from '@/helpers/constants'
import { APIValidate } from '@/api/APIValidate'
const hobbyApi = API_URL + '/hobby'

export class APIHobby {
    getHobby (hobbyId) {
        return new Promise((resolve, reject) => {
            let url = `${hobbyApi}/${hobbyId}`
            axios.get(url)
                .then(response => {
                    APIValidate(response, { resolve, reject })
                })
                .catch(message => {
                    console.log(message)
                    reject(message)
                })
        })
    }
}
