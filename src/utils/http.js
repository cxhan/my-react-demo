import axios from 'axios'
import { API_URL } from './config'

// mockjs会拦截掉相应的ajax请求
// import '../mock/index.mock'
let _http = axios.create({
    timeout: 30000,
    baseURL: API_URL,
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
})

_http.interceptors.request.use(config => {
    console.log(config)
    return config
}, error => {
    return Promise.reject(error)
})

_http.interceptors.response.use(response => {
    return response
}, error => {
    if (error.response) {
        console.log(error.response)
    }
    return Promise.reject(error)
})

export default _http
