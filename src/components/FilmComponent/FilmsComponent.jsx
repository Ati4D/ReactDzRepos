import React from 'react';
import FilmList from './FilmList';
import './style.css';
import SerchFilmsForm from './SerchFilmsForm';

const FilmsComponent = () => {
    return (
        <div className='f-cont-main'>
            <SerchFilmsForm/>
            <FilmList/>
        </div>
    );
}

export default FilmsComponent;
