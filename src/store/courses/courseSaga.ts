import axiosClient from "@api/api";
import CourseApi from "@api/CourseApi";
import LoginApi from "@api/LoginApi";
import RegisterApi from "@api/RegisterApi";
import { Course, User } from "@models";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { call, cancelled, fork, put, take } from "redux-saga/effects";
import { courseActions, CoursePayload } from "./courseClient";


export class ApiError {
    message: string;
    code: number;
    constructor(error: any) {
        this.message = error.message;
        this.code = error.code;
    }
}



function* handlerLogin(payload: CoursePayload) {
    try {
        const result: Course = yield CourseApi.getAll(payload);
        console.log('result', result)

        yield put(courseActions.getCourseDetailSuccess(result));

    } catch (error: any) {
        yield put(courseActions.getCourseDetailFailed(error.message));
    }



}


// function* handlerRegister(payload: RegisterPayload) {
//     try {
//         console.log('handlerRegister', payload)

//         const result: User = yield RegisterApi.register(payload);
//         console.log('handlerRegister result', result)
//         yield put(authActions.registerSuccess(result?.data));
//     } catch (error: any) {
//         yield put(authActions.loginFailed(error.message));
//     }

// }

// function* handlerLogout() {
//     console.log('handlerLogout')
//     AsyncStorage.removeItem('access_tokent')
// }

function* watchCourses() {
    //khi nhận một action có type là login thì làm việc gì đó
    //lắng nghe một action là yield take(cái action đó) => thực hiện cái action này thì dùng fork(cái function, action.payload)
    const action: PayloadAction<CoursePayload> = yield take(courseActions.getCourseDetail.type);
    yield fork(handlerLogin, action.payload);
    // yield take(authActions.logout.type);
    // yield call(handlerLogout);
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