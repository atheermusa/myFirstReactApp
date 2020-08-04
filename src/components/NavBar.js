import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

export default class NavBar extends Component {
    render() {
        return (
            <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/profile">Profile</NavLink>
            <NavLink to="/albums">Albums</NavLink>
            </nav>
        )
    }
}
