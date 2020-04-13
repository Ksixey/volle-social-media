import {getAuth} from "../AuthReducer/AuthReducer";

const INITIALIZED_SUCCESS = 'network/app/INITIALIZED_SUCCESS';

const initialState = {
    initialized: false,
};

export const AppReducer = (state=initialState,action) =>  {
    switch (action.type) {
        case  INITIALIZED_SUCCESS:
            return {...state, initialized: true};
        default: return state;
    }
};


export const setInitialize = (initialize) => ({type:INITIALIZED_SUCCESS, initialize});

export const initializeApp = () => (dispatch) => {
    let promise = dispatch(getAuth());
    Promise.all([promise]).then(() => {
        dispatch(setInitialize())
    })
};