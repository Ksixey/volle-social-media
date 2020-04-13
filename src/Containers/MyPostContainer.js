import {addPost} from "../Components/reducers/ProfileReducer/ProfileReducer";
import MyPosts from "../Components/Profile/MyPosts/MyPosts";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        post: state.profilePage.post,
        newPostMessage:state.profilePage.newPostMessage,
        profile:state.profilePage.profile
    }
};


const MyPostsContainer = connect(mapStateToProps,{
    addPost
})(MyPosts);


export default MyPostsContainer;