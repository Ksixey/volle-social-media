import React, {Component} from "react";
import Header from "../Components/Header/Header";
import {connect} from 'react-redux'
import {logout} from "../Components/reducers/AuthReducer/AuthReducer";

class HeaderContainer extends Component{
    render() {
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state)=> {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
};

export default connect(mapStateToProps, {logout})(HeaderContainer)