import React, {useContext, useState} from 'react';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import LikedFilmsContext from '../../contexts/LikedFilmsContext';

const Film = ({name,year,image,director,description}) => {
    
    const [isOpened, setIsOpened] = useState(false);
    const { addFilm, removeFilm, checkFilm } = useContext(LikedFilmsContext);

    return (
        <div className='f-cont'>
            <h2>{name} <FontAwesomeIcon icon={faHeart} className={ checkFilm({name, year, image}) ? "hb" : "hr" } onClick={checkFilm({name, year, image}) ? ()=>{removeFilm({name, year, image})} : ()=>{addFilm({name, year, image})}}/></h2>
            <img className='f-img' srcSet={image} alt={"\""+image+"\""} />
            <div>
                <h5>{year}</h5>
                <button onClick={()=>{setIsOpened(!isOpened)}}>{isOpened ? "X" : "Details"}</button>
                <div className={classNames({dopen: (isOpened)},{dclose: !(isOpened)})}>
                    <h4>{"Director: "+director}</h4>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
}

export default Film;
