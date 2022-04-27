import authSaga from '@store/auth/authSaga';
import courseSaga from '@store/courses/courseSaga';
import VideoSaga from '@store/videos/videoSaga';
import { all } from 'redux-saga/effects';


//im port các saga cần chạy vào đây
function* rootSaga() {
  yield all([
    authSaga(),
    courseSaga(),
    VideoSaga()
  ]);
}

export default rootSaga;
