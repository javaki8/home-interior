import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import api from '../../api/tasks'


function* addTask(action) {
  
  const result = yield call(api.post, action.payload)
  yield put({type:"ADD_TASK_SUCCEEDED", payload: action.payload});  
  
}

function* fetchTasks(action) {
//  console.log("-- Saga: action --")
// console.log(action);  
  const result = yield call(api.list);
//console.log("-- Saga: api result --")
//console.log(result.data);
  yield put({type:'FETCH_TASKS_SUCCEEDED', payload: result.data})
}

function* removeTasks(action){
  const result = yield call(api.delete, action.payload)

  yield put({type:"REMOVE_TASK_SUCCEEDED", payload: action.payload});
}

function* myPageSaga() {
    
yield takeEvery("ADD_TASK", addTask);
yield takeLatest("FETCH_TASKS", fetchTasks);
yield takeEvery("REMOVE_TASK", removeTasks);

}

export default myPageSaga