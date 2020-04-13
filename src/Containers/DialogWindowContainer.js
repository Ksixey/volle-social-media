import React from "react";
import DialogWindow from "../Components/Dialogs/DialogWindow/DialogWindow";
import {connect} from "react-redux";


const mapStateToProps = (state) => {
    return {
        dialogPage: state.dialogPage,
    }
};

let  DialogWindowContainer = connect(mapStateToProps)(DialogWindow);

export default DialogWindowContainer