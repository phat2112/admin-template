import axios from 'axios'
import {decamelizeKeys, camelizeKeys} from 'humps'

const getListShoes = () => {
    return axios.get('https://shop-shoe-database.herokuapp.com/top-shoes').then(res => camelizeKeys(res.data))
} 
const getShoeItems = () => {
    return axios.get('https://shop-shoe-database.herokuapp.com/shoes').then(res => camelizeKeys(res.data))
}
const getShoeId = idShoe => {
    return axios.get(`https://shop-shoe-database.herokuapp.com/shoes/${idShoe}`, decamelizeKeys(idShoe)).then(res => camelizeKeys(res.data))
}
export const ShoesServices = {
    getListShoes,
    getShoeItems,
    getShoeId,
}