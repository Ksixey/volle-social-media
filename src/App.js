import React from 'react';
import {Route,Switch} from 'react-router-dom';
import HeaderContainer from "./Containers/HeaderContainer";
import Nav from "./Components/Nav-bar/Nav";
import ProfileContainer from "./Containers/ProfileContainer";
import {connect} from "react-redux";
import {compose} from "redux";
import {withRouter} from "react-router-dom";
import {initializeApp} from "./Components/reducers/appReducer/appReducer";
import './App.css';
import {Preloader} from "./Components/Common/Preloader/Preloader";
import {Provider} from 'react-redux'
import {store} from "./redux-store/store";
import {HashRouter} from "react-router-dom";
import {withSuspence} from './HOC/withSuspence'

const DialogContainer = React.lazy(() => import("./Containers/DialogContainer"));
const UserContainer = React.lazy(() => import("./Containers/UsersContainer"));
const Login = React.lazy(() => import("./Components/Login/Login"))

class App extends React.Component{
    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if(!this.props.initialized) return <Preloader/>
        return (
        <div className='app-wrapper'>
            <HeaderContainer/>
            <Nav/>
            <div className='app-wrappper-content'>
                <Switch>
                    <Route path='/profile/:userId?'  render={() => <ProfileContainer /> } />
                    <Route path='/dialogs' render={ withSuspence (DialogContainer)  } />
                    <Route path='/user' render={withSuspence (UserContainer )}/>
                    <Route path='/login' render={withSuspence(Login)}/>
                </Switch>
            </div>
        </div>
    );
}
}

const mapStateToProps = state => {
    return {
        initialized: state.app.initialized
    }
};

const AppContainer =  compose(
    withRouter,
    connect(mapStateToProps, {initializeApp})
)(App);

const AppNetwork = () => {
    return <HashRouter>
    <Provider store={store}>
        <AppContainer/>
    </Provider>
</HashRouter>
}

export default AppNetwork;