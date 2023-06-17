import React from 'react';

const SerchFilmsForm = () => {
    const submitHandler = (e) => {
        e.preventDefault();
    };

    return (
        <form className='f-form' onSubmit={submitHandler}>
            <h2>Serch Form</h2>
            <label htmlFor="fname">Write name: </label>
            <input type="text" name="fname" id="text"/>
            <input type="submit" value="Serch"/>
        </form>
    );
}

export default SerchFilmsForm;
