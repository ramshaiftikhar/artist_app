import React from 'react'


// Artist name input form
const Form = props => (

    <form onSubmit={props.getArtist} style={{ marginBottom:"2rem" }}>
        <input className="form__input" type="text" name="artistName" required/>
        <button type='submit' className="form__button get-started-btn">Search</button>
    </form>
);

export default Form;