import { takeLatest, put, call} from 'redux-saga/effects'
import {AuthActions} from 'Stores/auth/Actions'
import {authConstants} from 'Stores/auth/constant'
import {authServices} from 'Services/AuthServices'

function* handleLogin({userValue}){
    try{
        const resp = yield call(authServices.authLogin, userValue);
        yield put(AuthActions.handleLoginSuccess(resp))
    }
    catch(err){
        yield put(AuthActions.handleLoginfail(err))
    }
}
export default function* watcher(){
    yield takeLatest(authConstants.AUTH_LOGIN, handleLogin)
}