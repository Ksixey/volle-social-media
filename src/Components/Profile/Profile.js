import React from "react";
import MyPostsContainer from "../../Containers/MyPostContainer";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
   
    return (
        <>
        <ProfileInfo {...props }  />
        {!props.userId && <MyPostsContainer  />}
        </>
    )
};

export default Profile