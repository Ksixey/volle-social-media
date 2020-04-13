import React from 'react';
import {reduxForm} from 'redux-form';
import {Input, Textarea, createField} from '../../../Common/FormControls/FormControls'
import {maxLength} from '../../../../Helpers/validators/validators'
import {styleInput, styleTextareaDataProfile}  from '../style'
import classes from '../FormMessage/FormMessage.module.css'

let maxLength30 = maxLength(30);
let maxLength100 = maxLength(100);

let ProfileDataForm = ({handleSubmit, contacts, error}) => {
    return <form className={classes.form} onSubmit={handleSubmit}>
            <div className={classes.buttonContainerCenter}>
                <button className={classes.buttonSend}>Submit</button>
            </div>
            
            {error && <p>{error}</p>}
            <div>
                <span>Change fullname : </span> {createField("Your name...", "fullName", [maxLength30], Input, {styleInput} )}
            </div>
            <div>
                <span>Looking for a job : </span> {createField(null, "lookingForAJob", [], Input, {type: 'checkbox'} )}
            </div>
            <div>
                <span>Describe your professional skills : </span> {createField("Your skills", "lookingForAJobDescription", [maxLength100], Textarea, {styleTextareaDataProfile})}
            </div>
            <div>
                <span>Tell about yourself : </span> {createField("Tell about yourself...", "aboutMe", [maxLength100], Textarea, {styleTextareaDataProfile} )}
            </div>
            {Object.keys(contacts).map(key=> {
                    return <div>
                        <span className={classes.spanContacts} >{key}</span> 
                    {createField(key,"contacts." + key, [], Input, {styleInput})}
                    </div> 
                })}
    </form>
}

ProfileDataForm=reduxForm({
    form:'changeProfile'
})(ProfileDataForm)

export default ProfileDataForm;