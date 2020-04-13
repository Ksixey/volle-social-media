import {userAPI} from "../../../API/api";

const TOGGLE_FOLLOW = 'network/user/TOGGLE_FOLLOW';
const SET_USERS = 'network/user/SET_USERS';
const NEW_CURRENT_PAGE = 'network/user/NEW_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'network/user/SET_TOTAL_USERS_COUNT';
const SET_FETCHING = 'network/user/SET_FETCHING';
const FOLLOWING_IN_PROGRESS = 'network/user/FOLLOWING_IN_PROGRESS';

const initialState = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProcess: []
};

export const UserReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_FOLLOW:
            return {
                ...state, users: state.users.map(u => {
                    if(u.id === action.userId){
                        return {...u, followed: !u.followed}
                    }
                    return u
                })
            };
        case SET_USERS:
            return {...state,users: action.users};
        case NEW_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage};
        case SET_TOTAL_USERS_COUNT:
            return {...state, totalUsersCount: action.count};
        case SET_FETCHING:
            return {...state, isFetching: action.isFetching};
        case FOLLOWING_IN_PROGRESS:
        return {...state,
            followingInProcess: action.inProcess
            ? [...state.followingInProcess, action.userId]
            : state.followingInProcess.filter(id => id !== action.userId)
        };

        default: return state;
    }
};

export const setUsers = (users) => ({type:SET_USERS, users});
export const toggleFollow = (userId) => ({type:TOGGLE_FOLLOW, userId});
export const newCurrentPage = (currentPage) => ({type:NEW_CURRENT_PAGE,currentPage});
export const setTotalUsersCount = (count) => ({type:SET_TOTAL_USERS_COUNT, count});
export const setIsFetching = (isFetching) => ({type:SET_FETCHING, isFetching});
export const setFollowingInProcess = (inProcess,userId) => ({type: FOLLOWING_IN_PROGRESS, inProcess,userId});

export const getUsers = (currentPage, pageSize) => async (dispatch) => {
        dispatch(setIsFetching(true));
        let response = await userAPI.getUsers(currentPage, pageSize)
            dispatch(setIsFetching(false));
            dispatch(setUsers(response.items));
            dispatch(setTotalUsersCount(response.totalCount))
        };

const followUnfollowFlow = async(dispatch, userId, apiMethod) => {

    dispatch(setFollowingInProcess(true, userId));
    let response = await apiMethod(userId);
    if (response.resultCode === 0) {
        dispatch(toggleFollow(userId))
    }
    dispatch(setFollowingInProcess(false,userId));   
};

export const getUnfollowAC = (userId) => async(dispatch) => {
    followUnfollowFlow(dispatch, userId, userAPI.unfollowUser.bind(userAPI))
};

export const getFollowAC = (userId) => async (dispatch) => {
    followUnfollowFlow(dispatch, userId, userAPI.followUser.bind(userAPI))
    };


