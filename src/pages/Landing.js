import React from 'react';
import Navbar from '../components/Navbar/Navbar.js'
import Hero from '../components/Hero/Hero.js';
import Search from '../components/Search/Search.js';


class Landing extends React.Component {
  

  render(){
  
        return (

          <div className="landing">
              
                  {/* Navigation Bar */}
                  <Navbar/>

                
                  {/* Hero section*/}
                  <Hero/>


                  {/*Search Section*/}
                  <Search/>

          </div>

        );
  }
}

export default Landing;