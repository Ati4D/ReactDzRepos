import React, {useState} from 'react';
import classNames from 'classnames';

const Film = ({name,year,image,director,description}) => {
    
    const [buttonText, setButtonText] = useState('Details');

    const open = ()=>{return buttonText === 'Details' ? false : true; };

    const DetailsHandler = (event)=>{
        setButtonText(buttonText === 'Details' ? 'X' : 'Details');
    }

    return (
        <div className='f-cont'>
            <h2>{name}</h2>
            <img className='f-img' srcSet={image} alt={"\""+image+"\""} />
            <div>
                <h5>{year}</h5>
                <button onClick={(event)=>{DetailsHandler(event);}}>{buttonText}</button>
                <div className={classNames({dopen: open()},{dclose: !open()})}>
                    <h4>{"Director: "+director}</h4>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
}

export default Film;
