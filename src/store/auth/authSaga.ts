import axiosClient from "@api/api";
import LoginApi from "@api/LoginApi";
import RegisterApi from "@api/RegisterApi";
import { User } from "@models";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { call, cancelled, fork, put, take, takeLatest } from "redux-saga/effects";
import { authActions, LoginPayload, RegisterPayload } from "./authClient";


let isCheck: any;
AsyncStorage.getItem('access_token').then(value => isCheck = value);

export class ApiError {
    message: string;
    code: number;
    constructor(error: any) {
        this.message = error.message;
        this.code = error.code;
    }
}



function* handlerLogin({ payload }: LoginPayload) {
    try {
        console.log('handlerLogin')
        const result: User = yield LoginApi.login(payload);
        yield put(authActions.loginSuccess(result?.user));
        const jsonValue = JSON.stringify(result?.accessToken)
        AsyncStorage.setItem('access_token', jsonValue)
    } catch (error: any) {
        yield put(authActions.loginFailed(error.message));
    }



}


function* handlerRegister(payload: RegisterPayload) {
    try {
        console.log('handlerRegister', payload)
        const result: User = yield RegisterApi.register(payload);
        console.log('handlerRegister result', result)
        yield put(authActions.registerSuccess(result?.data));
    } catch (error: any) {
        yield put(authActions.loginFailed(error.message));
    }

}

function* handlerLogout() {
    console.log('handlerLogout')
    AsyncStorage.removeItem('access_token')
}

function* watchLoginFlow() {
    yield takeLatest(authActions.login.toString(), handlerLogin);
    yield takeLatest(authActions.logout.toString(), handlerLogout);
}

function* watchRegister() {
    //khi nhận một action có type là login thì làm việc gì đó
    //lắng nghe một action là yield take(cái action đó) => thực hiện cái action này thì dùng fork(cái function, action.payload)
    while (true) {
        const IsLoggedIn = Boolean(isCheck);
        if (!IsLoggedIn) {
            console.log('handlerRegister')
            const action: PayloadAction<LoginPayload> = yield take(authActions.register.type);
            yield fork(handlerRegister, action.payload);
        }
        yield take(authActions.logout.type);
        yield call(handlerLogout);
    }

}



export default function* authSaga() {
    //khi vào nó chạy rootsaga thì nó chạy hết mấy cái trong root saga, import cái này qua bên root saga
    yield fork(watchLoginFlow);
    yield fork(watchRegister);

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