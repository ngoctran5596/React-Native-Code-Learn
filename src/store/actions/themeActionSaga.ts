
export const TOGGLE_THEME = '@themeApp/request';
export const TOGGLE_THEME_SUCCESS_SAGA = '@themeApp/success';

export const toggleRequest = () => ({type: TOGGLE_THEME});
export const toggleSuccess = (payload:any) => ({type: TOGGLE_THEME_SUCCESS_SAGA,payload});



