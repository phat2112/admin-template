import { put, call, takeLatest } from 'redux-saga/effects'
import {SHOES_LIST} from './constant'
import {ShoesServices} from 'Services/ShoeList' 
import { ShoeActions } from './Actions'

function* getShoeItem(){
    try{
        const resp = yield call(ShoesServices.getListShoes)
        yield put(ShoeActions.setShoeList(resp))
    }
    catch(err){
        yield put(ShoeActions.getShoeError(err))
    }
}
function* getListShoeItem(){
    try{
        const resp = yield call(ShoesServices.getShoeItems)
        yield put(ShoeActions.setShoeItem(resp))
    }
    catch(err) {
        yield put(ShoeActions.getShoeError(err))
    }
}
function* getShoeId({idShoe}){
    try{
        const resp = yield call(ShoesServices.getShoeId, idShoe)
        yield put(ShoeActions.setShoesId(resp))
    }catch(err) {
        yield put(ShoeActions.setShoesIdError(err))
    }
}
export default function* watcher(){
    yield takeLatest(SHOES_LIST.GET_SHOES_LIST, getShoeItem);
    yield takeLatest(SHOES_LIST.GET_SHOES_ITEMS, getListShoeItem);
    yield takeLatest(SHOES_LIST.GET_SHOE_ID, getShoeId)
}