import React from 'react';
import Navbar from '../components/Navbar/Navbar'
import Hero from '../components/Hero/Hero';
import Search from '../components/Search/Search';


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