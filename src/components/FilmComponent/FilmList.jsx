import React from 'react';
import Film from './Film';

const FilmList = ({ Films }) => {
    return (
        <div>
            <h2>Films</h2>
            <h5>Sorted by year</h5>
            <div className='f-list'>
                {Films.sort((p,n) =>{ return parseInt(p['Year']) - parseInt(n['Year'])}).map((film) => (
                    <Film key={Films.indexOf(film)} name={film['Title']} year={film['Year']} image={film['Poster']} director={film['Director']} description={film['Plot']} />
                ))}
            </div>
        </div>
    );
}

export default FilmList;
