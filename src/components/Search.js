import React from 'react';
import Form from './Form.js'
import ArtistInfo from './ArtistInfo.js';

import singer from  '../assets/img/singer.png';


const API_ID = "codingbootcamp";



class Search extends React.Component{

    state = {
        artists : null
    }

    

    getArtist = async (e) => {
        const artistName = e.target.elements.artistName.value;
        e.preventDefault();
        const api_call = await fetch(`https://rest.bandsintown.com/artists/${artistName}/?app_id=${API_ID}`); 
        const data = await api_call.json();
        console.log(data);
        // console.log(data.error);

        if(data == ''){
            this.setState({ artists: "unavailable"});
            console.log("oh nooo");
        }

        else{
            this.setState({ artists: data});
            console.log(this.state.artists);
        }
       
    };

    componentDidMount = () =>{
        const json = localStorage.getItem("artists");
        const artists = JSON.parse(json);
        this.setState({artists:artists});
    }

    componentDidUpdate = () =>{
        const artists = JSON.stringify(this.state.artists);
        localStorage.setItem("artists", artists);
    }

    

  
    render(){

       return (

        <main id="main">
            <section id="search-artist" className="search-artist">
                <div className="container">
                    <div className="row no-gutters">
                        <div className="content col-xl-5 d-flex align-items-stretch" data-aos="fade-right">
                            <div className="content">
                            <h3>Look up your Favourite Artist</h3>
                            <p> Don't miss the chance to see your favourite in concert! Search now for any upcoming events and concerts snear you.</p>
                            </div>
                        </div>

                        <div className="col-xl-7 d-flex align-items-stretch" data-aos="fade-left">

                            <div className="icon-boxes d-flex flex-column justify-content-center">
                                <div className="row">
                                    <div className="col-md-6 icon-box" data-aos="fade-up" data-aos-delay="300">
                                    <br/>
                                    <h4>Search Artist</h4>
                                    <Form getArtist= {this.getArtist}/>  
                                     
                                    </div>
                                    <div className="col-md-6 icon-box" data-aos="fade-up" data-aos-delay="400">
                                        <img src={singer} className="img-fluid" alt="" data-aos="zoom-in" data-aos-delay="150"/>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                   
                </div>
            </section>
             <ArtistInfo artists= {this.state.artists}/>  
        </main>


       );

    }
}


export default Search;