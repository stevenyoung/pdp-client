import React from 'react';
import PropTypes from 'prop-types';

// import Leafletmap from './Leafletmap';
import MapboxGLMap from './MapboxGLMap';
// import MapboxGLMap from './newMapboxGLMap';
// import ReactMapboxGLMap from './ReactMapboxGLMap';

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
  accessToken: PropTypes.string,
  placeCollection: PropTypes.array,
  searchTerm: PropTypes.string,
  tileLayer: PropTypes.string,
  mapCenter: PropTypes.object,
  dispatch: PropTypes.func,
  handleLocationSelect: PropTypes.func
};

export default MapContainer;
