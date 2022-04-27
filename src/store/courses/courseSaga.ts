import axiosClient from "@api/api";
import CourseApi from "@api/CourseApi";
import LoginApi from "@api/LoginApi";
import RegisterApi from "@api/RegisterApi";
import { Course, User } from "@models";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { PayloadAction } from "@reduxjs/toolkit";
import { RegisterPayload } from "@store/auth/authClient";
import axios from "axios";
import { call, cancelled, fork, put, take, takeEvery } from "redux-saga/effects";
import { courseActions, CoursePayload } from "./courseClient";


export class ApiError {
    message: string;
    code: number;
    constructor(error: any) {
        this.message = error.message;
        this.code = error.code;
    }
}

function* handlerAddStudent({ payload }: any) {
    try {
        const result: Course = yield CourseApi.addstudent(payload.id, payload.access_token);
        console.log('handlerAddStudent', result)
        yield put(courseActions.addCourseSuccess(result))
    } catch (error: any) {
        yield put(courseActions.addCourseFailed(error))

    }
}

function* handlerCourse() {
    try {
        const result: Course = yield CourseApi.getAll();
        console.log('result', result)
        yield put(courseActions.getCourseDetailSuccess(result));

    } catch (error: any) {
        yield put(courseActions.getCourseDetailFailed(error.message));
    }
}

function* watchCourses() {

    yield takeEvery(courseActions.getCourseDetail.toString(), handlerCourse);
    yield takeEvery(courseActions.addCourse.toString(), handlerAddStudent);
}


export default function* authSaga() {
    //khi vào nó chạy rootsaga thì nó chạy hết mấy cái trong root saga, import cái này qua bên root saga
    yield fork(watchCourses);
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