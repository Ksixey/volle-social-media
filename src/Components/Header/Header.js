import React from 'react';
import classes from './Header.module.css'
import {Logo} from "../Logo/Logo";
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={classes.header}>
            <Logo />
            <div className={classes.loginBlock}>
                {props.isAuth? <div>
                    <p className={classes.login}>{props.login}</p>
                    <button onClick={props.logout} className={classes.logoutButton}>Logout</button>
                </div> : <NavLink className={classes.login} to='/login'>Sign to</NavLink>}
            </div>
        </header>
    )
};

export default Header;