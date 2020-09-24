import React from 'react'
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';


const Form = props => (

  <form onSubmit={props.getArtist} style={{ marginBottom:"2rem" }}>
      <input className="form__input" type="text" name="artistName" required/>

      {/* <Link to="artist-info-section" smooth={true} duration={1000}> */}
      <button  className="form__button get-started-btn">Search</button>
      {/* </Link> */}
    
  </form>
);

export default Form;