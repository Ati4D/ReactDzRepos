import React, {useState} from 'react';
import classNames from 'classnames';

const Film = ({name,year,image,director,description}) => {
    
    const [isOpened, setIsOpened] = useState(false);

    return (
        <div className='f-cont'>
            <h2>{name}</h2>
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
