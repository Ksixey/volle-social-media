import React from "react";
import {reduxForm} from "redux-form";
import {maxLength} from "../../../../Helpers/validators/validators";
import {Textarea} from "../../../Common/FormControls/FormControls";
import {createField} from "../../../Common/FormControls/FormControls";
import {styleTextarea} from '../style'
import classes from '../FormMessage/FormMessage.module.css'

const maxLength150 = maxLength(150);

let ProfileForm = (props) => {
    return <form className={classes.form} onSubmit={props.handleSubmit}>
        {createField("Enter your post...", "postField", [maxLength150],Textarea,{styleTextarea})}
        <div className={classes.buttonContainer}>
            <button className={classes.buttonSend}>Publish text</button>
        </div>
    </form>
};

ProfileForm = reduxForm({
    form: 'newPost'
})(ProfileForm);

export default ProfileForm;