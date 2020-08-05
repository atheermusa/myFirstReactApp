import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
        return (
            <nav>
              <NavLink to="/">Home</NavLink>
              <NavLink to="/profile">Profile</NavLink>
              <NavLink to="/albums">Albums</NavLink>
              <NavLink to="/toptracks">Top Tracks</NavLink>
            </nav>
        );
    }

export default NavBar;
