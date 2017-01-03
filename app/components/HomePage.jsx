import React from 'react';
import ContentSearchInput from './ContentSearchInput';
import MapContainer from './MapContainer';
import Footer from './Footer';
import SiteData from '../content/SiteData';

import places from '../fixtures/pdp/places';

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
          placeCollection={places}
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
