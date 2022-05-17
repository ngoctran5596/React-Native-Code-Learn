import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "@models";
export interface LoginPayload {
    email?: string;
    password?: string;
    type?:string;
    payload?:any;
}

export interface RegisterPayload {
    name?: string;
    email?: string;
    password?: string;
    isTutor?: boolean;
}


export interface AuthState {
    isLoggedIn?: boolean;
    logging?: boolean;
    currentUser?: User;
    errorMessage?: string;
    configRegister?: string;
}
const initialState: AuthState = {
    isLoggedIn: false,
    logging: false,
    currentUser: undefined,
    configRegister: undefined,
    errorMessage: undefined,
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login(state, actions: PayloadAction<LoginPayload>) {
            state.logging = true;
        },
        loginSuccess(state, actions: PayloadAction<User>) {
            state.logging = false;
            state.currentUser = actions.payload;
        },
        loginFailed(state, actions: PayloadAction<string>) {
            state.logging = false;
            state.errorMessage = actions.payload;
        },
        register(state, actions: PayloadAction<RegisterPayload>) {
            state.logging = false;
        },
        registerSuccess(state, actions: PayloadAction<string>) {
            state.logging = true;
            state.configRegister = actions.payload;
        },
        registerFailed(state, actions: PayloadAction<string>) {
            state.errorMessage = actions.payload;
            state.logging = false;

        },
        logout(state) {
            state.isLoggedIn = false;
            state.currentUser = undefined;

            state.configRegister = undefined;
            state.errorMessage = undefined;
        }
    },
})
//ACTION
export const authActions = authSlice.actions;

console.log(initialState)
//SELECT
export const selectIsLoggedIn = (state: any) => state.isLoggedIn
export const selectLogged = (state: any) => state.logging
export const selectCurrentUser = (state: any) => state.currentUser


//REDUCER
const authReducer = authSlice.reducer;

export default authReducer;
