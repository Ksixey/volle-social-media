import React from "react";
import {Redirect} from "react-router";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        loginId: state.auth.id
    }
};

export const withAuthRedirect = (Component) => {
    class AuthRedirect extends React.Component{
        render() {
            if(!this.props.isAuth) return <Redirect to='/login'/>;
            return <Component {...this.props}/>
        }
    }

    return connect(mapStateToProps)(AuthRedirect)
};