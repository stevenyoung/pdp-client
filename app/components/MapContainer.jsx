import React from 'react';

import Leafletmap from './Leafletmap';
import ResultsSummary from './ResultsSummary';

const MapContainer = (props) => {
  const mapSettings = {
    accessToken: props.accessToken,
    tileUrl: 'https://api.mapbox.com/styles/v1/mapbox/light-v9/tiles/256/{z}/{x}/{y}',
    defaultZoom: 9,
    maxZoom: 18
  };
  return (
    <div className="mapcontainer">
      <Leafletmap
        center={props.userLocation}
        places={props.placeCollection}
        mapSettings={mapSettings}
      />
      <ResultsSummary
        results={props.placeCollection}
        searchTerm={props.searchTerm}
      />
    </div>
  );
};

MapContainer.propTypes = {
  accessToken: React.PropTypes.string,
  userLocation: React.PropTypes.object,
  placeCollection: React.PropTypes.array,
  searchTerm: React.PropTypes.string
};

MapContainer.defaultProps = {
  userLocation: { lat: 37.749202, lng: -122.41575 }
};

export default MapContainer;
