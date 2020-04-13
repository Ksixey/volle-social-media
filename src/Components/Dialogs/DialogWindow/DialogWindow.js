import React from "react";
import classes from './DialogWindow.module.css';
import DialogItem from "./DialogItem/DialogItem";

const DialogWindow = (props) => {
    const dialogs = props.dialogPage.dialog.map(item => {
            return <DialogItem key={item.id} name={item.name}/>
        });

    return(
        <div className={classes.dialogWindow}>
            <ul className={classes.dialogItem}>
                {dialogs}
            </ul>
        </div>
    )
};

export default DialogWindow