import authSaga from '@store/auth/authSaga';
import courseSaga from '@store/courses/courseSaga';
import { all } from 'redux-saga/effects';


//im port các saga cần chạy vào đây
function* rootSaga() {
  yield all([
    authSaga(),
    courseSaga()
  ]);
}

export default rootSaga;
