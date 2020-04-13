import React from "react";
import classes from './MessageModule.module.css'
import Message from "./Message/Message";
import FormMessage from "../Forms/FormMessage/FormMessage";

const MessageModule = (props) => {
    const message = props.dialogPage.message.map(item => {
        return <Message key={item.id} message={item.message}/>
    });

    let  addNewMessage = (objOfData) => {
        props.addNewMessage(objOfData.newMessage)
    };

    return (
        <div className={classes.massageModule}>
            {message}
        <FormMessage onSubmit={addNewMessage}/>
        </div>

    )
};

export default MessageModule