import {all} from 'redux-saga/effects'
import Home from './Home/sagas'

 function* rootSaga(){
  yield all([
    Home()
  ])
}

export default rootSaga;