import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Course, Video } from "@models";

export interface VideoPayload {
    _id?: string;
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
export interface VideoPayload2 {
    access_token: string;
    id?: string;
    type?: any;

}
export interface VideoState {
    video?: Video;
    messageCompleted?: any;
    errorMessage?: string;
}
const initialState: VideoState = {
    video: undefined,
    errorMessage: undefined,
    messageCompleted: undefined,
}

const videoSlice = createSlice({
    name: "videos",
    initialState,
    reducers: {
        postComplete(state) {
            state
        },
        postCompleteSuccess(state, actions: PayloadAction<Video>) {
            state.messageCompleted = actions.payload;
        },
        postCompleteFailed(state, actions: PayloadAction<string>) {
            state.errorMessage = actions.payload;
        }
    },
})
//ACTION
export const videoActions = videoSlice.actions;


//SELECT
export const selectVideo = (state: any) => state.video

//REDUCER
const VideoReducer = videoSlice.reducer;

export default VideoReducer;
