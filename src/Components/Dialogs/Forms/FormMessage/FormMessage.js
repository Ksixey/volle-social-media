import React from "react";
import {maxLength} from "../../../../Helpers/validators/validators";
import {reduxForm} from "redux-form";
import {Textarea} from "../../../Common/FormControls/FormControls"
import {createField} from "../../../Common/FormControls/FormControls"
import classes from './FormMessage.module.css'
import {styleTextarea} from '../style'

let maxLength300 = maxLength(300);


let FormMessage = (props) => {
    return  <form className={classes.form} onSubmit={props.handleSubmit}>
        {createField("Enter your meassage.. ", "newMessage", [maxLength300],Textarea, {type: "text", styleTextarea} )}
        <div className={classes.buttonContainer}>
            <button className={classes.buttonSend}>Send message</button>
        </div>
            </form>
};

FormMessage = reduxForm({
    form: 'addMessage'
})(FormMessage);

export default FormMessage;