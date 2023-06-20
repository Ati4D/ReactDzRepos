import React from 'react';

const LIComponent = ({descr, type, val, chngeAct}) => {
    return (
        <div>
            <label htmlFor="fname">{descr}: </label>
            <input type={type} name="fname" value={val} onChange={chngeAct}/>
        </div>
    );
}

export default LIComponent;
