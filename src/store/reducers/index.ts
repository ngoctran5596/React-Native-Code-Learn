import authReducer from '@store/auth/authClient';
import courseReducer from '@store/courses/courseClient';
import { combineReducers } from 'redux';
import appTheme from '../theme/themeClient';


const reducers = combineReducers({
    appTheme,
    auth: authReducer,
    courses: courseReducer
});

export type RootState = ReturnType<typeof reducers>;

export default reducers;