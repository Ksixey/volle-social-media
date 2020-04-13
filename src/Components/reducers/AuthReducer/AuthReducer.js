import {authAPI, securityAPI} from "../../../API/api";
import {stopSubmit} from "redux-form";

const AUTH_USER = 'network/auth/AUTH_USER';
const GET_CAPTCHA = 'network/auth/GET_CAPTCHA';

const initialState = {
    email: null,
    userId: null,
    login: null,
    isAuth: false,
    captchaURL: null
};

export const AuthUserReducer = (state=initialState,action) =>  {
    switch (action.type) {
        case AUTH_USER :
        case GET_CAPTCHA :
            return {...state, ...action.payload};
        default: return state;
    }
};


export const setAuthUser = (id,email,login, isAuth) => ({type:AUTH_USER, payload:{id,email,login, isAuth}});
const getCaptchaURL = (captchaURL) => ({type: GET_CAPTCHA, payload: {captchaURL}})

export const getAuth = () => async(dispatch) => {
    let responce = await  authAPI.me();
    if(responce.resultCode === 0){
        let {id,email,login} = responce.data;
        dispatch(setAuthUser(id,email,login,true))
            }
    };


export const login = (email, password, rememberMe, captcha) => async(dispatch) => {
    let response = await authAPI.login(email, password, rememberMe, captcha)
        if(response.resultCode === 0){
            dispatch(getAuth())
        }else {
            if (response.resultCode === 10){
                dispatch( getCaptchaURLSuccess())
            }
            let message = response.messages.length > 0 ? response.messages[0] : 'Some error';
            dispatch( stopSubmit('login', {_error: `${message}`}))
        }
    };

export const logout = () => async(dispatch) => {
    let response = await authAPI.logout()
        if(response.resultCode === 0) {
            dispatch(setAuthUser(null,null,null,false))
        }
}

export const getCaptchaURLSuccess = () => async(dispatch) => {
    let response = await securityAPI.getCaptchaURL();
    const captchaURL = response.url;
    dispatch(getCaptchaURL(captchaURL))
};