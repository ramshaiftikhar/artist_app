import React from 'react';
import hero from '../../assets/img/hero-img.png'
import AOS from 'aos';
import {Link} from 'react-scroll';



// Hero Component on landing page
class Hero extends React.Component{

    componentDidMount(){
        AOS.init({
          duration : 1000
        })
      }

    render(){
       
       return (

          <section className="d-flex align-items-center" id="hero">
              <div className="container d-flex flex-column align-items-center justify-content-center" data-aos="fade-up">
              <h1>Stay Connected with your Favourite Artists</h1>
              <h2>Discover the best upcoming live streams from around the world - continuously updated so you'll never miss a thing.</h2>
              <Link to="search-artist" smooth={true} duration={1000} className="btn-get-started">Get Started</Link> 
              <img src ={hero} className="img-fluid hero-img" alt="" data-aos="zoom-in" data-aos-delay="150"/>
              </div>
          </section>


       );

    }
}


export default Hero;