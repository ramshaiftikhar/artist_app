import React from 'react';
import {Link} from 'react-scroll';


class Header extends React.Component{

   
    


  
    render(){

       return (

        <header id="header" className="fixed-top">
            <div className="container d-flex align-items-center">
            <h1 className="logo mr-auto"> BandsInTown</h1>
            <nav className="nav-menu d-none d-lg-block">
            </nav>
            {/* <a  href="#search-artist" className="get-started-btn">Search Artist</a>  */}
            
           
            
            
            
            </div>
        </header>



       );

    }
}


export default Header;