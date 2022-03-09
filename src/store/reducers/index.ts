import authReducer from '@store/auth/authClient';
import {combineReducers} from 'redux';
import appTheme from '../theme/themeClient';


const reducers = combineReducers({
    appTheme,
    auth:authReducer
});

export type RootState = ReturnType<typeof reducers>;

export default reducers;