import React from "react";
import {reduxForm } from "redux-form";
import {Input} from "../../../Common/FormControls/FormControls";
import {required} from "../../../../Helpers/validators/validators";
import controlClass from "../../../Common/FormControls/FormControl.module.css"
import {createField} from "../../../Common/FormControls/FormControls";
import classes from '../FormMessage/FormMessage.module.css'
import {styleInput} from '../style'

const LoginForm = ({handleSubmit, error, captchaURL}) => {
    
    return <form className={classes.form} onSubmit={handleSubmit}>
        {createField("Email","email",[required],Input,{type: "email", styleInput})}
        {createField("Password","password",[required],Input, {type: "password", styleInput})}
        {captchaURL && <img src={captchaURL}/> }
        {captchaURL && createField("Symbols from captcha","captcha",[required],Input, {})}

        {error && <div className={controlClass.formSummeryError} >
            {error}
        </div>}
        <div className={classes.buttonContainerCenter}>
            <button className={classes.buttonSend}>Login</button>
        </div>
    </form>
};

export const LoginReduxForm = reduxForm({
    form: 'login' //a unique name for this form
})(LoginForm);