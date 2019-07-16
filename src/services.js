import axios from 'axios'
import * as constants from './constants'

let search = (params) => {
    return axios({
        method: 'GET',
        url: constants.baseUrl,
        params
    })
}

export {
    search
}