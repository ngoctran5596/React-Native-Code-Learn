import authSaga from '@store/auth/authSaga';
import { all } from 'redux-saga/effects';


//im port các saga cần chạy vào đây
function* rootSaga() {
  yield all([
    authSaga(),
  ]);
}

export default rootSaga;
