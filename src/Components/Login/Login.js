import React from "react";
import {LoginReduxForm} from "../Dialogs/Forms/LoginForm/LoginForm";
import {connect} from 'react-redux';
import {login} from "../reducers/AuthReducer/AuthReducer";
import {Redirect} from "react-router";
import classes from './Login.module.css'

const Login = ({isAuth, login, captchaURL}) => {
    const onSubmit = (formData) => {    
        login(formData.email,formData.password,formData.rememberMe,formData.captcha)
    };

if(isAuth){
    return <Redirect to={'/profile'}/>
}

    return <div className={classes.loginContainer}>
        <h1 className={classes.loginTitle}>Login</h1>
        <LoginReduxForm onSubmit={onSubmit} captchaURL={captchaURL}/>
    </div>
};

let mapStateToProps = state => {
    return {
        isAuth: state.auth.isAuth,
        captchaURL: state.auth.captchaURL
    }
};

export default connect(mapStateToProps, {login})(Login);