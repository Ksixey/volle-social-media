import React from "react";
import classes from './FormControl.module.css'
import {Field} from "redux-form";


const FormControl = ({input,meta: {touched, error},children}) => {
    const hasError = touched && error;

    return <div className={classes.formControl + ' ' + (hasError && classes.error)}>
        <div>
            {children}
        </div>
        {hasError && <span className={classes.error}>{error}</span>}
    </div>
};

export const Textarea = (props) => {
    const {input,meta, ...restProps} = props;
    return <FormControl{...props}>
        <textarea style={restProps.styleTextarea || restProps.styleTextareaDataProfile}{...input} {...restProps}/>
    </FormControl>

};

export const Input = (props) => {
    const {input,meta, ...restProps} = props;
    return <FormControl {...props}><input style={restProps.styleInput } {...input} {...restProps} /></FormControl>
};

export const createField = (placeholder, name, validators, component, props = {}, text= "") => (
<div>
    <Field placeholder={placeholder} name={name} validate={validators} component = {component}
    {...props}/> {text}
</div>
)