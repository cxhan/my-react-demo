import axios from '../utils/http'

export function getLocation(params) {
    console.log(params)
    return axios.get('/ws/location/v1/ip', { params })
}