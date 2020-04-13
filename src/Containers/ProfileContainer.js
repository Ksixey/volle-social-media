import React, {Component} from "react";
import Profile from "../Components/Profile/Profile";
import {connect} from 'react-redux'
import {goToUserProfile, getStatus,uploadNewStatus, savePhoto, saveProfile} from "../Components/reducers/ProfileReducer/ProfileReducer";
import {withRouter} from "react-router";
import {withAuthRedirect} from "../HOC/withAuthRedirect";
import {compose} from "redux";


export class ProfileContainer extends Component{
    
    refreshProfile = () => {
        let userId = this.props.match.params.userId;
        if(!userId ) {
            userId = this.props.profileId;
            if(!userId){
                this.props.history.push("/login")
            }
        }
        this.props.goToUserProfile(userId);
        this.props.getStatus(userId)
    }

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps) {
        if(prevProps.match.params.userId !== this.props.match.params.userId) {
            this.refreshProfile()
        }
    }

    render() {
        return <Profile 
        userId={this.props.match.params.userId}
        {...this.props}
        isOwner = {!this.props.match.params.userId}
        />
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        profileId: state.auth.id,
        isUth: state.auth.isAuth,
        status: state.profilePage.status,
    }
};

export default compose(
    connect(mapStateToProps, {goToUserProfile, getStatus, uploadNewStatus, savePhoto, saveProfile}),
    withRouter,
    withAuthRedirect
)(ProfileContainer);