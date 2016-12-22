import React from 'react';
import ContentSearchInput from './ContentSearchInput.jsx';
import MapContainer from './MapContainer.jsx';
import Footer from './Footer.jsx';
import SiteData from '../content/SiteData.js';

export default function HomePage() {
  return (
    <div className="home">
      <ContentSearchInput />
      <MapContainer
        accessToken={SiteData.mapboxToken}
        userLocation={{ lat: -122.419416, lng: 37.774929 }}
      />
      <Footer copyright={SiteData.copyright} />
    </div>
  );
}

HomePage.propTypes = {
  children: React.PropTypes.node
};
