import React from "react";
import classes from './Post.module.css'

const Post = ({profile, text}) => {
    return (
        <div className={classes.item}>
            <div className={classes.imgWrapper}>
                <img className={classes.avatar} src={profile.photos.large} alt="photoUser"/>
            </div>
            <div className={classes.textPost}>{text}</div>
        </div>
    )
};

export default Post;