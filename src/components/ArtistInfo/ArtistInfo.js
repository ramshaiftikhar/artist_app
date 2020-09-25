import React from "react";
import { Link } from "react-router-dom";

// Display artist info i.e. image, fb profile button and events button
class ArtistInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      artists: [],
    };
  }

  render() {
    // If artist does not exist
    if (this.props.artists === "unavailable") {
      return (
        <section className="artist-info" id="artist-info-section">
          <section id="hero" className="d-flex align-items-center">
            <div
              className="artist-info-display container d-flex flex-column align-items-center justify-content-center"
              data-aos="fade-up"
            >
              <h1 className="artist-name">No Results Found for your Search</h1>
            </div>
          </section>
        </section>
      );
    } else if (this.props.artists === null) {
      return (
        <section className="artist-info" id="artist-info-section">
          <section id="hero" className="d-flex align-items-center">
            <div
              className="artist-info-display container d-flex flex-column align-items-center justify-content-center"
              data-aos="fade-up"
            >
              <h1 className="artist-name">Artist Results Displayed Here</h1>
            </div>
          </section>
        </section>
      );
    } else {
      return (
        <section className="artist-info" id="artist-info-section">
          <section id="hero" className="d-flex align-items-center">
            <div
              className="artist-info-display container d-flex flex-column align-items-center justify-content-center"
              data-aos="fade-up"
            >
              <h1 className="artist-name">{this.props.artists.name}</h1>
              <img
                data-testid="artist-image"
                src={this.props.artists.image_url}
                className="artist-image hero-img"
                alt={this.props.artists.name}
                data-aos=""
                data-aos-delay="150"
              />

              <button id="fb-button">
                <a
                  data-testid="fb-button-link"
                  className="fb-link"
                  href={this.props.artists.facebook_page_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Facebook Profile
                </a>
              </button>

              <button id="events-button" data-testid="events-button">
                <Link
                  to={{
                    pathname: `/${this.props.artists.name}/events`,
                    state: { artist: this.props.artists.name },
                  }}
                >
                  View Events
                </Link>
              </button>
            </div>
          </section>
        </section>
      );
    }
  }
}

export default ArtistInfo;
