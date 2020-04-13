import React from "react";
import {addNewMessage} from "../Components/reducers/DialogReducer/DialogReducer";
import MessageModule from "../Components/Dialogs/MessageModule/MessageModule";
import {connect} from "react-redux";



let mapStateToProps = (state) => {
    return {
        dialogPage: state.dialogPage
    }
};


const MessageModuleContainer = connect(mapStateToProps,{addNewMessage})(MessageModule);

export default MessageModuleContainer