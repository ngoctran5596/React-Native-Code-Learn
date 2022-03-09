import { lightTheme, darkTheme } from '@theme/theme';


export const TOGGLE_THEME_BEGIN = 'TOGGLE_THEME_BEGIN';
export const TOGGLE_THEME_SUCCESS = 'TOGGLE_THEME_SUCCESS';
export const TOGGLE_THEME_FAILURE = 'TOGGLE_THEME_FAILURE';

export const toggleThemeBegin = () => ({ type: TOGGLE_THEME_BEGIN })
export const toggleThemeSuccess = (selectTheme: any) => ({ type: TOGGLE_THEME_SUCCESS, payload: selectTheme })
export const toggleThemeFailure = (error: any) => ({ type: TOGGLE_THEME_FAILURE, payload: {error} })


export function toggleTheme(themeType: any) {
    return (dispatch: any) => {
        dispatch(toggleThemeBegin())

        switch (themeType) {
            case 'dark':
                dispatch(toggleThemeSuccess(darkTheme));
                break;
            case 'light':
                dispatch(toggleThemeSuccess(lightTheme));
                break;
            default:
                dispatch(toggleThemeFailure({ error: "Invalid theme type" }));
                break;
        }
    }
}

