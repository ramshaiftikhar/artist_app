import React from 'react';
//import Started from './components/Started';
// import Header from '../components/Header';
import Navbar from '../components/Navbar'
import Hero from '../components/Hero';
import Search from '../components/Search';








class Landing extends React.Component {
  

  render(){
  
  return (

    <div className="landing">
        
             {/* Header section*/}
            {/* <Header/> */}
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