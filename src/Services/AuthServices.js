import axios from 'axios'
import {decamelizeKeys, camelizeKeys} from 'humps'

const authLogin = userValue => {
    return axios.post('https://reqres.in/api/login', decamelizeKeys(userValue))
                 .then(res => camelizeKeys(res.data))
}
export const authServices = {
    authLogin,
}