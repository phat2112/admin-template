import {SHOES_LIST} from './constant'

const getshoeList = () => ({
    type: SHOES_LIST.GET_SHOES_LIST,
})
const setShoeList = shoe => ({
    type: SHOES_LIST.SET_SHOES_LIST,
    shoe
})
const getShoeError = err => ({
    type: SHOES_LIST.GET_SHOES_LIST_ERROR,
    err
})
const getShoeItem = () => ({
    type: SHOES_LIST.GET_SHOES_ITEMS,
})
const setShoeItem = itemShoe => ({
    type: SHOES_LIST.SET_SHOES_ITEMS,
    itemShoe
})
const getShoeItemError = err => ({
    type: SHOES_LIST.GET_SHOES_LIST_ERROR,
    err
})
const getShoesId = idShoe => ({
    type: SHOES_LIST.GET_SHOE_ID,
    idShoe
}) 
const setShoesId = shoeData => ({
    type: SHOES_LIST.SET_SHOE_ID,
    shoeData
}) 
const setShoesIdError = err => ({
    type: SHOES_LIST.SET_SHOE_ID_ERROR,
    err,
}) 
export const ShoeActions = {
    getshoeList,
    setShoeList,
    getShoeError,
    getShoeItem,
    setShoeItem,
    getShoeItemError,
    getShoesId,
    setShoesId,
    setShoesIdError,
}