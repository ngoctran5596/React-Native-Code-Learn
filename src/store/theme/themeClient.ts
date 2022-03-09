import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {selectedTheme } from "@theme/theme";

const initialState = {
    appTheme: selectedTheme,
}

const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        lightTheme(state, actions: PayloadAction<any>) {
            console.log(actions.payload)
            state.appTheme = actions.payload;
        },
        darkTheme(state, actions: PayloadAction<any>) {
            state.appTheme = actions.payload;
        }
    },
})
//ACTION
export const themeActions = themeSlice.actions;

//SELECT
export const selectTheme = (state: any) => state.appTheme



//themeSlice
const themeReducer = themeSlice.reducer;

export default themeReducer;
