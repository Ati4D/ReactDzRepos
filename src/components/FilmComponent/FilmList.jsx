import React, { useMemo } from 'react';
import Film from './Film';

const FilmList = ({ Films }) => {

    let sortedFilms = useMemo(()=>{return Films.sort((p,n) =>{ return parseInt(p['Year']) - parseInt(n['Year'])})}, [Films]);
    
    return (
        <div>
            <h2>Films</h2>
            <h5>Sorted by year</h5>
            <div className='f-list'>
                {sortedFilms.map((film) => (
                    <Film key={Films.indexOf(film)} name={film['Title']} year={film['Year']} image={film['Poster']} director={film['Director']} description={film['Plot']} />
                ))}
            </div>
        </div>
    );
}

export default React.memo(FilmList,(prev, next)=>{
    return prev.Films === next.Films;
});
