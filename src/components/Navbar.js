import React from 'react';
import { Link } from 'react-router-dom';


class Header extends React.Component{

   
    


  
    render(){

       return (

        <header id="header" className="fixed-top">
            <div className="container d-flex align-items-center">
            <h1 className="logo mr-auto"> BandsInTown</h1>
            <nav className="nav-menu d-none d-lg-block">
            </nav>
            {/* <a  href="#search-artist" className="get-started-btn">Search Artist</a>  */}
            
             <button className="home-button">
             <Link to="/">Home</Link> 
             </button> 
            
            
            
            </div>
        </header>



       );

    }
}


export default Header;