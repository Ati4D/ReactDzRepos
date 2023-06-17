import React from 'react';

const Film = ({name,year,image,director,description}) => {
    return (
        <div className='f-cont'>
            <h2>{name}</h2>
            <img className='f-img' srcSet={image} alt={"\""+image+"\""} />
            <div>
                <h5>{year}</h5>
                <h4>{"Director: "+director}</h4>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default Film;
