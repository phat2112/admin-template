import {INITIAL_STATE} from 'Stores/auth/State'
import {authConstants} from 'Stores/auth/constant'
import * as tokenStorage from 'Utils/tokenStorage'

const LoginReducer = ( state= INITIAL_STATE, action) => {
    switch(action.type){
        case authConstants.AUTH_LOGIN_SUCCESS:
            return{
                ...state,
                token: action.token,
            }
        case authConstants.AUTH_LOGIN_FAIL:
            return{
                ...state,
                err: action.err
            }
        default: 
            return state
    }
}
export const authReducers = {
    LoginReducer,
}