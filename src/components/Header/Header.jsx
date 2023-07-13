import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import './style.css';
import ThemeContext from '../../contexts/ThemeContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faMoon, faHeart } from '@fortawesome/free-solid-svg-icons'
import LikedFilmsContext from '../../contexts/LikedFilmsContext';

const Header = () => {
    const { theme, setThemeLight, setThemeDark } = useContext(ThemeContext);
    const { addFilm, removeFilm, checkFilm, films } = useContext(LikedFilmsContext);
    return (
        <header className={theme}>
            <NavLink className='btn' to="/">Home</NavLink>
            <NavLink className='btn' to="/counter">Counter</NavLink>
            <NavLink className='btn' to="/counters">Counters</NavLink>
            <NavLink className='btn' to="/films">Films</NavLink>
            <NavLink className='btn' to="/users" >Users</NavLink>
            <a>{theme === 'dark' ? <FontAwesomeIcon icon={faMoon} className='d' onClick={setThemeLight} /> : <FontAwesomeIcon icon={faSun} className='l' onClick={setThemeDark} />}</a>
            <a>{theme === 'dark' ? <FontAwesomeIcon icon={faHeart} className='d' /> : <FontAwesomeIcon icon={faHeart} className='l' />} {films.length}</a>
        </header>
    );
}

export default Header;
