import React from 'react';

import Leafletmap from './Leafletmap';
import ResultsSummary from './ResultsSummary';

const MapContainer = (props) => {
  const mapSettings = {
    accessToken: props.accessToken,
    tileUrl: props.tileLayer,
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
        onItemSelect={props.selectItem}
      />
    </div>
  );
};

MapContainer.propTypes = {
  accessToken: React.PropTypes.string,
  tileLayer: React.PropTypes.string,
  userLocation: React.PropTypes.object,
  placeCollection: React.PropTypes.array,
  searchTerm: React.PropTypes.string,
  selectItem: React.PropTypes.func
};

MapContainer.defaultProps = {
  userLocation: { lat: 37.749202, lng: -122.41575 }
};

export default MapContainer;
