import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import api from '../../api/tasks'


function* addTask(action) {

  console.log("-- Saga: action --")
  console.log(action);

  // 서버 에러를 발생시킴
  // id를 1로 세팅하여 id 중복오류가 발생되게 함
  action.payload.id = 1;

  // 1. back-end와 REST API 연동
  // yield call(비동기함수명, 매개변수, 매개변수...)
  try {
    const result = yield call(api.post, action.payload)
    console.log("-- Saga: api result --")
    console.log(result.data);

    // 2. state를 변경하는 reducer 함수를 실행
    yield put({ type: "ADD_TASK_SUCCEEDED", payload: action.payload });
  } catch (error) {
    yield put({ type: "SHOW_ALERT", msg: error.message });
  }
}

function* fetchTasks(action) {
  //  console.log("-- Saga: action --")
  // console.log(action);  
  const result = yield call(api.list);
  //console.log("-- Saga: api result --")
  //console.log(result.data);
  yield put({ type: 'FETCH_TASKS_SUCCEEDED', payload: result.data })
}

function* removeTasks(action) {
  const result = yield call(api.delete, action.payload)

  yield put({ type: "REMOVE_TASK_SUCCEEDED", payload: action.payload });
}

function* myPageSaga() {

  yield takeEvery("ADD_TASK", addTask);
  yield takeLatest("FETCH_TASKS", fetchTasks);
  yield takeEvery("REMOVE_TASK", removeTasks);

}

export default myPageSaga