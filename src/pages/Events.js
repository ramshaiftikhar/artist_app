import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import AOS from 'aos';
const API_ID = "codingbootcamp";


class Events extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            events: []
        };
        AOS.init(); 
    }


    componentDidMount = async () => {

        const name = this.props.location.state.artist;
        
        if (name === localStorage.getItem('name')) {
            const events = localStorage.getItem("events");
            const events_list = JSON.parse(events);
            this.setState({ events: events_list });
          
        }

        else {
            const req = await fetch
                (`https://rest.bandsintown.com/artists/${ name }/events/?app_id=${ API_ID }`);
            const res = await req.json();
            this.setState({ events: res });
            const events = JSON.stringify(res);
            localStorage.setItem("events", events);
        }


    };
    componentWillUnmount() {
        AOS.refreshHard();
    }



    render() {

        return (

            <div>
               
                <Navbar />
                <section id="steps" className="steps" >

                    <div className="container">
                        <h1 className="number-of-events">{ this.state.events.length } Upcoming Events</h1>
                        <div className="event-info-display col-lg-12 col-md-6 content-item" data-aos="fade-up" data-aos-delay="300" >

                            { this.state.events.map(event => {
                                return (
                                    <div key={ event.id } className="event-card" >
                                        <h4 key={ event.title } className="event-heading">Event Details</h4>
                                        <ul key={ event.venue } className="event-details-list">
                                            <li className="event-country"><strong>Country :</strong> <p>{ event.venue.country }</p></li>
                                            <li className="event-city"><strong>City :</strong><p>{ event.venue.city }</p></li>
                                            <li className="event-venue"><strong>Venue :</strong><p> { event.venue.name }</p></li>
                                            <li className="event-date"><strong>Date :</strong> <p> { event.datetime }</p></li>
                                        </ul>
                                    </div>

                                );
                            })
                            }
                        </div>
                    </div>
                </section>
            </div>


        );





    }

}

export default Events;