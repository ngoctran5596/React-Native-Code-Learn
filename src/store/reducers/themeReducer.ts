import * as themeActionTypes from '../actions/themeAction';
import {TOGGLE_THEME_SUCCESS_SAGA,TOGGLE_THEME} from '../actions/themeActionSaga';
import { selectedTheme } from '@theme/theme';


const initialState = {
    appTheme: selectedTheme,
    error: null,
}


const themeReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case TOGGLE_THEME:
            return {
                ...state,
                error: null
            }
        case TOGGLE_THEME_SUCCESS_SAGA:
            return {
                ...state,
                appTheme:action.payload,
            }
        case themeActionTypes.TOGGLE_THEME_FAILURE:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state;
    }
}

export default themeReducer;