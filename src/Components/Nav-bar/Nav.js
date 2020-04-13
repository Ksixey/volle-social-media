import React from 'react';
import classes from './Nav.module.css'
import {NavLink} from "react-router-dom";

const Nav = () => {
    return (
        <nav className={classes.nav}>
            <ul className={classes.ul}>
                <li className={classes.li}>
                    <NavLink to="/profile" className={classes.link} activeClassName={classes.active}>
                        Profile
                    </NavLink>
                </li>
                <li className={classes.li} >
                    <NavLink to="/dialogs" className={classes.link} activeClassName={classes.active}>
                        Messages
                    </NavLink>
                </li>
                <li className={classes.li}>
                    <NavLink to="/user" className={classes.link} activeClassName={classes.active}>
                        Users
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
};

export default Nav;