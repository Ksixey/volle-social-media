import React from "react";
import {connect} from 'react-redux'
import DialogWindowContainer from "./DialogWindowContainer";
import MessageModuleContainer from "./MessageModuleContainer";
import {withAuthRedirect} from "../HOC/withAuthRedirect";
import {compose} from "redux";

class DialogContainer extends React.Component{
    render() {
        return <div className={"dialogContainer"}>
            <DialogWindowContainer/>
            <MessageModuleContainer />
        </div>
    }
}

let mapStateToProps =(state)=> {
    return {}
};

export default compose(
    connect(mapStateToProps),
    withAuthRedirect
)(DialogContainer)