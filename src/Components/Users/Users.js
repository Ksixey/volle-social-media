import React from "react";
import {User} from "./User";


export const Users = ({currentPage,onPageChanged,totalUsersCount,pageSize,users, ...props}) => {
    return <div>
        
        {
            users.map(u => {
        return <User 
                key={u.id}
                user={u} 
                followingInProcess={props.followingInProcess}
                getUnfollowAC={props.getUnfollowAC}
                getFollowAC={props.getFollowAC}
                />
        })
        }
    </div>
};