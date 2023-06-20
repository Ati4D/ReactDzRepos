import React, {useState} from 'react';
import FilmList from './FilmList';
import './style.css';
import SerchFilmsForm from './SerchFilmsForm';
import AddFilmForm from './AddFilmForm';
import {films} from './Data/films';


const FilmsComponent = () => {
   const [filmsList, setFilmsList] = useState(films);

   const addFilm = (name, year, img, dir, descr) => {
     let newFilm = {
       id: films.length,
       name: name,
       year: year,
       image: img,
       director: dir,
       description: descr
     };
     setFilmsList([...filmsList, newFilm]);
   }


    return (
        <div className='f-cont-main'>
            <div className='r-cont'>
                <SerchFilmsForm/>
                <AddFilmForm addFilm = {addFilm}/>
            </div>
            <FilmList Films={filmsList}/>
        </div>
    );
}

export default FilmsComponent;
