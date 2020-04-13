import {applyMiddleware, combineReducers,compose, createStore} from "redux";
import {ProfileReducer} from "../Components/reducers/ProfileReducer/ProfileReducer";
import {DialogReducer} from "../Components/reducers/DialogReducer/DialogReducer";
import {UserReducer} from "../Components/reducers/UserReducer/UserReducer";
import {AuthUserReducer} from "../Components/reducers/AuthReducer/AuthReducer";
import {AppReducer} from "../Components/reducers/appReducer/appReducer";
import {reducer as formReducer} from 'redux-form';
import thunk from "redux-thunk";


let rootReducer = combineReducers({
    profilePage:ProfileReducer,
    dialogPage:DialogReducer,
    usersPage: UserReducer,
    auth: AuthUserReducer,
    app: AppReducer,
    form: formReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(rootReducer,  composeEnhancers(applyMiddleware(thunk)));
window.store = store