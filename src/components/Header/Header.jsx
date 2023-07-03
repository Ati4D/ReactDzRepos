import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/counter">Counter</NavLink>
            <NavLink to="/films">Films</NavLink>
            <NavLink to="/users">Users</NavLink>
        </header>
    );
}

export default Header;
