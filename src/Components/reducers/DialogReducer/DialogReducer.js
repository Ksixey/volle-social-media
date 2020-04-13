const ADD_MESSAGE = 'network/dialog/ADD_MESSAGE';

const initialState = {
    message : [

    ],

    dialog : [
        {id: 1, name: 'Xenia'},
        {id: 2, name: 'Ihor'},
        {id: 3, name: 'Natalia'},
        {id: 4, name: 'Den'},
        {id: 5, name: 'Lena'}
    ],
};

export const DialogReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE :
            let message = action.newMessage;
            let newMessage =  {id:4, message: message};
            return {...state,
                message:[...state.message, newMessage]};
        default: return state;
    }
};

export const addNewMessage = (newMessage) => ({type:ADD_MESSAGE, newMessage});


