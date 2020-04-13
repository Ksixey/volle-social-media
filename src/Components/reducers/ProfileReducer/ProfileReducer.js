import {profileAPI, userAPI} from "../../../API/api";
import {stopSubmit} from "redux-form";

const ADD_POST = 'network/profile/ADD_POST';
const DELETE_POST = 'network/profile/DELETE_POST';
const SET_USER_PROFILE = 'network/profile/SET_USER_PROFILE';
const SET_STATUS ='network/profile/SET_STATUS';
const SUCCESS_PHOTO = 'network/profile/SUCCESS_PHOTO'
const UPDATE_PROFILE = 'network/profile/UPDATE_PROFILE'

const initialState = {
        post : [],
        profile: null,
        status: '',
        updateProfile:null
};

export const ProfileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST :
            let message = action.newPost;
            let idPost = action.idPost 
            let newMessage = {id: idPost , message: message};
            return {...state,
                post : [...state.post, newMessage]};
        case DELETE_POST:
                return {...state, post: state.post.filter(post => post.id !== action.idPost)}
        case SET_USER_PROFILE :
            return {...state,profile: action.profile};
        case SET_STATUS:
            return {...state, status: action.status};
        case SUCCESS_PHOTO:
            return {...state, profile: {...state.profile, photos: action.photos}};
        default: return state;
    }
};

export const addPost = (newPost, idPost) => ({type: ADD_POST, newPost, idPost});
export const deletePost = (idPost) => ({type: DELETE_POST, idPost})
export const setUserProfile = (profile) => ({type:SET_USER_PROFILE, profile});
const savePhotoSuccess = (photos) =>({type: SUCCESS_PHOTO, photos});
const setStatus = (status) => ({type:SET_STATUS, status});

export const goToUserProfile = (userId) => async (dispatch) => {
        let response = await userAPI.goToProfileFromId(userId)
        dispatch(setUserProfile(response));
    };

export const getStatus = (userId) => async (dispatch) => {
    let response =  await profileAPI.getStatus(userId)
    dispatch(setStatus(response))
};

export const uploadNewStatus = (status) => async (dispatch) =>{
    let response = await profileAPI.setNewStatus(status)
        if(response.resultCode === 0) {
            dispatch(setStatus(status))
    }
};

export const savePhoto = (file) => async (dispatch) =>{
    let response = await profileAPI.savePhoto(file);
    if(response.resultCode === 0) {
            dispatch(savePhotoSuccess(response.data.photos))
    }
};

export const saveProfile = (data) => async (dispatch,getState) =>{
    const userId = getState().auth.id;
    let response = await profileAPI.saveProfile(data);
    if(response.resultCode === 0) {
        dispatch(goToUserProfile(userId))
    }else{
        let message = response.messages[0].slice(response.messages[0].indexOf(">") + 1,
        response.messages[0].indexOf(")")).toLowerCase()
        dispatch(stopSubmit("changeProfile", {"contacts":{
            [message] : response.messages[0]
        } }))
        return Promise.reject(response.messages[0])
    }
};