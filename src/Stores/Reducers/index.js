import {combineReducers} from 'redux'
import {authReducers} from 'Stores/auth/Reducers'
import {shoeReducers} from 'Stores/shoe/Reducers'

const rootReducer = combineReducers({
  auth: authReducers.LoginReducer,
  shoes: shoeReducers.setShoeList,
  shoesItem: shoeReducers.setShoesItems,
  shoeId: shoeReducers.setShoeId
})
export default rootReducer