import React from 'react';
import PropTypes from 'prop-types';

// import MapboxGLMap from './MapboxGLMap';
import ReactMapboxGLMap from './ReactMapboxGLMap';
import AddPlaceButton from './AddPlaceButton';

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
      <ReactMapboxGLMap
        accessToken={props.accessToken}
        dispatch={props.dispatch}
        mapCenter={props.mapCenter}
        places={props.placeCollection}
        mapSettings={mapSettings}
        searchTerm={props.searchTerm}
        onClick={props.handleMapClick}
      />
      <AddPlaceButton />
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
  handleMapClick: PropTypes.func,
  handleMarkerClick: PropTypes.func,
  newPlacePosition: PropTypes.object
};

export default MapContainer;
