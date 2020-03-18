import {all} from 'redux-saga/effects'
import authSagas from 'Stores/auth/Sagas'
import shoeSagas from 'Stores/shoe/Sagas'

export default function* rootSaga(){
	yield all([
		authSagas(),
		shoeSagas(),
	])
}
