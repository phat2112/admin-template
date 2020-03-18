import {INITIAL_STATE} from './state'
import { fromJS } from 'immutable'
import { SHOES_LIST } from './constant'

const setShoeList = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case SHOES_LIST.SET_SHOES_LIST:
            return state.merge(
                fromJS({
                    listShoes: action.shoe
                })
            )
        default: 
            return state
    }
}
const setShoesItems = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case SHOES_LIST.SET_SHOES_ITEMS:
            return state.merge(
                fromJS({
                    listShoeItems: action.itemShoe
                })
            )
        default: 
            return state
    }
}
const setShoeId = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case SHOES_LIST.SET_SHOE_ID:
            return state.merge(
                fromJS({
                    shoeData: action.shoeData
                })
            )
        default: 
            return state
    }
}
export const shoeReducers = {
    setShoeList,
    setShoesItems,
    setShoeId,
}
