import React from 'react';

import MapboxGLMap from './MapboxGLMap';

const MapContainer = (props) => {
  const mapSettings = {
    accessToken: props.accessToken,
    tileUrl: props.tileLayer,
    defaultZoom: 9,
    maxZoom: 18,
    focusZoom: 12
  };

  return (
    <div className="mapcontainer">
      <MapboxGLMap
        accessToken={props.accessToken}
        mapCenter={props.mapCenter}
        places={props.placeCollection}
        mapSettings={mapSettings}
      />
    </div>
  );
};

MapContainer.propTypes = {
  accessToken: React.PropTypes.string,
  placeCollection: React.PropTypes.array,
  searchTerm: React.PropTypes.string,
  tileLayer: React.PropTypes.string,
  mapCenter: React.PropTypes.object,
  dispatch: React.PropTypes.func,
  handleLocationSelect: React.PropTypes.func
};

export default MapContainer;
