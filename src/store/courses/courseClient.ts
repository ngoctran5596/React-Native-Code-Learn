import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Course } from "@models";

export interface CoursePayload {
    _id?: string;
    videos?: any[];
    students?: any[];
    instructor?: Object;
    title?: string;
    duration?: string;
    ratings?: string;
    price?: string;
    is_favorite?: boolean;
}
export interface CourseState {
    courses?: Course;
    errorMessage?: string;
}
const initialState: CourseState = {
    courses: undefined,
    errorMessage: undefined,
}

const courseSlice = createSlice({
    name: "courses",
    initialState,
    reducers: {
        getCourseDetail(state, actions: PayloadAction<CoursePayload>) {
            state
        },
        getCourseDetailSuccess(state, actions: PayloadAction<Course>) {
            state.courses = actions.payload;
        },
        getCourseDetailFailed(state, actions: PayloadAction<string>) {
            state.errorMessage = actions.payload;
        }
    },
})
//ACTION
export const courseActions = courseSlice.actions;

console.log(initialState)
//SELECT
export const selectCourse = (state: any) => state.courses

//REDUCER
const courseReducer = courseSlice.reducer;

export default courseReducer;
