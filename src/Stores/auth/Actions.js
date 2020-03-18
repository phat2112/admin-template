import {authConstants} from 'Stores/auth/constant'

const handleLogin = userValue => ({
    type: authConstants.AUTH_LOGIN,
    userValue,
})
const handleLoginSuccess = token => ({
    type: authConstants.AUTH_LOGIN_SUCCESS,
    token,
})
const handleLoginfail = err => ({
    type: authConstants.AUTH_LOGIN_FAIL,
    err
})
export const AuthActions = {
    handleLogin,
    handleLoginSuccess,
    handleLoginfail,
}