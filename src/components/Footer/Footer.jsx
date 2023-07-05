import React, { useContext } from 'react';
import LikedFilmsContext from '../../contexts/LikedFilmsContext';
import './style.css';

const Footer = () => {
    const { films } = useContext(LikedFilmsContext);

    return (
        <footer>
            <div>
                <h3>Liked Films: </h3>
                <div className='LFilms'>
                    {films.map(film => <a href=''>{film.name}</a>)}
                </div>
            </div>
        </footer>
    );
}

export default Footer;
