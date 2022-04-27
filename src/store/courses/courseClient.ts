import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Course } from "@models";

export interface CoursePayload {
    _id?: string;
    id?: string;
    videos?: any[];
    students?: any[];
    instructor?: Object;
    title?: string;
    duration?: string;
    ratings?: string;
    price?: string;
    is_favorite?: boolean;
    access_token?: string;
}
export interface CoursePayload2 {
    access_token?: string;

}
export interface CourseStudentPayload {
    id?: string;
    errorMessage?: string;
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
        getCourseDetail(state) {
            state
        },
        getCourseDetailSuccess(state, actions: PayloadAction<Course>) {
            state.courses = actions.payload;
        },
        getCourseDetailFailed(state, actions: PayloadAction<string>) {
            state.errorMessage = actions.payload;
        },
        addCourse(state, actions: PayloadAction<CourseStudentPayload>) {
            state
        },
        addCourseSuccess(state, actions: PayloadAction<any>) {
            state.errorMessage = actions.payload
        },
        addCourseFailed(state, actions: PayloadAction<string>) {
            state.errorMessage = actions.payload;
        }
    },
})
//ACTION
export const courseActions = courseSlice.actions;

//SELECT
export const selectCourse = (state: any) => state.courses

//REDUCER
const courseReducer = courseSlice.reducer;

export default courseReducer;
