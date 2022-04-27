import axiosClient from "@api/api";
import CourseApi from "@api/CourseApi";
import LoginApi from "@api/LoginApi";
import RegisterApi from "@api/RegisterApi";
import VideoApi from "@api/VideoApi";
import { Course, User, Video } from "@models";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { PayloadAction } from "@reduxjs/toolkit";
import { courseActions } from "@store/courses/courseClient";
import axios from "axios";
import { call, cancelled, fork, put, take, takeEvery } from "redux-saga/effects";
import { videoActions, VideoPayload, VideoPayload2 } from "./videoClient";


export class ApiError {
    message: string;
    code: number;
    constructor(error: any) {
        this.message = error.message;
        this.code = error.code;
    }
}



function* handlerVideo({ payload }: any) {
    try {
        const result: Video = yield VideoApi.addIsComplete(payload.id, payload.access_token);
        yield put(videoActions.postCompleteSuccess(result));
        yield put(courseActions.getCourseDetail());
    } catch (error: any) {
        yield put(videoActions.postCompleteFailed(error.message));
    }



}

export default function* VideoSaga() {
    yield takeEvery(videoActions.postComplete.toString(), handlerVideo);
}


export function* callApi<T1 extends Array<any>>(
    fn: (...args: any[]) => any,
    ...args: T1
): Generator<any, any, any> {
    const source = axios.CancelToken.source();
    try {
        return yield call(fn, ...args, source.token);
    } catch (error) {
        throw new ApiError(error);
    } finally {
        if (yield cancelled()) {
            source.cancel();
        }
    }
}