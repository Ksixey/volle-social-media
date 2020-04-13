import React from "react";
import classes from './DialogItem.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) =>{
    let path = "/dialogs/"+props.id;
    return (
        <li className={classes.dialog }>
            <NavLink className={classes.list} to={path} >
                {props.name}
            </NavLink>
        </li>
    )
};

export default DialogItem