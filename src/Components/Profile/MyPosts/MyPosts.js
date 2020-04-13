import React, {Component} from 'react';
import Post from "./Post/Post";
import classes from './MyPosts.module.css'
import ProfileForm from "../../Dialogs/Forms/ProfileForm/ProfileForm";


class MyPosts extends Component {
    render() {
    const posts =this.props.post.map((item,index) => {
        return <Post profile={this.props.profile} key={index + item.id } text={item.message}/>
    });


const addNewPost = (post) =>{
    this.props.addPost(post.postField, 1)
};

return (
        <div className={classes.postsContainer}>
            <ProfileForm onSubmit={addNewPost}/>
            <div className={classes.post}>
                {posts}
            </div>
        </div>
)
   }
};
export default MyPosts;