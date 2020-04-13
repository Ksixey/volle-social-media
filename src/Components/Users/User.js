import React from "react";
import classes from "./Users.module.css";
import userPhoto from "../../etc/img/user.png";
import {NavLink} from "react-router-dom";


export const User = ({user,followingInProcess,getUnfollowAC,getFollowAC}) => {
    return <div className={classes.containerUser}>
            <div className={classes.followContainer}>
                <NavLink to={"/profile/" + user.id} >
                    <img className={classes.userPhoto} src={
                            !user.photos.small
                            ? userPhoto
                            : user.photos.small
                        }
                        alt="userIMG"/>
                </NavLink>
                {user.followed
                        ? <button className={classes.userButton} disabled={followingInProcess.some(id => id === user.id)} onClick={() => {
                                getUnfollowAC(user.id)
                        }}>Unfollow</button>
                        : <button  className={classes.userButton} disabled={followingInProcess.some(id => id === user.id)} onClick={() => {
                            getFollowAC(user.id)
                        }}>Follow</button>}
            </div>
                
        <p className={classes.userName}>{user.name}</p>
                    
                <span>
                        <div>Kyiv</div>
                        <div>Ukraine</div>
                </span>
            </div>
};