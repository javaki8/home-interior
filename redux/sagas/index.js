import { fork } from 'redux-saga/effects'
import myPageSaga from './tasks'

export default function* rootSaga() {
  yield fork(myPageSaga)

}