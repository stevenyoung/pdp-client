import React from 'react';
import ContentSearchInput from './ContentSearchInput.jsx';
import MapContainer from './MapContainer.jsx';
import Footer from './Footer.jsx';
import SiteData from '../content/SiteData.js';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { placeCollection: [] };
    this.updatePlaceCollection = this.updatePlaceCollection.bind(this);
  }

  updatePlaceCollection(collection) {
    this.setState({ placeCollection: collection });
  }

  render() {
    return (
      <div className="home">
        <ContentSearchInput
          placeholder="Place? Movie? Book? Song?"
          onUserUpdate={this.updatePlaceCollection}
        />
        <MapContainer
          accessToken={SiteData.mapboxToken}
          placeCollection={this.state.placeCollection}
        />
        <Footer copyright={SiteData.copyright} />
      </div>
    );
  }
}

HomePage.propTypes = {
  children: React.PropTypes.node
};

export default HomePage;
