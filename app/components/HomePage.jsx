import React from 'react';
import ContentSearchInput from './ContentSearchInput.jsx';
import MapContainer from './MapContainer.jsx';
import Footer from './Footer.jsx';
import SiteData from '../content/SiteData.js';
import ThreePlacesData from '../content/ThreePlacesData.js';

const HomePage = () =>
  (
    <div className="home">
      <ContentSearchInput
        placeholder="Place? Movie? Book? Song?"
      />
      <MapContainer
        accessToken={SiteData.mapboxToken}
        placeCollection={ThreePlacesData}
      />
      <Footer copyright={SiteData.copyright} />
    </div>
  );


HomePage.propTypes = {
  children: React.PropTypes.node
};

export default HomePage;
