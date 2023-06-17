import React from 'react';
import Film from './Film';
import {films} from './Data/films';

const FilmList = () => {
    return (
        <div>
            <h2>Films</h2>
            <div className='f-list'>
                {films.map((film) => (
                <Film key={film.id} name={film.name} year={film.year} image={film.image} director={film.director} description={film.description}/>
            ))}
            </div>
        </div>
    );
}

export default FilmList;
