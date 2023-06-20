import React from 'react';
import Film from './Film';

const FilmList = ({Films}) => {
    return (
        <div>
            <h2>Films</h2>
            <div className='f-list'>
                {Films.map((film) => (
                <Film key={film.id} name={film.name} year={film.year} image={film.image} director={film.director} description={film.description}/>
            ))}
            </div>
        </div>
    );
}

export default FilmList;
