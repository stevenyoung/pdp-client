import React from 'react';
import PropTypes from 'prop-types';
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';

const ReactMapboxGLMap = ({
    accessToken,
    mapCenter,
    places
}) => {
  const mapOptions = {
    style: 'mapbox://styles/mapbox/light-v9',
    center: [mapCenter.place.lng, mapCenter.place.lat],
    attributionControl: false,
    zoom: 11,
    pitch: 30
  };

  const containerStyle = {
    backgroundColor: 'pink',
    marginLeft: 'auto',
    marginRight: 'auto',
    // maxWidth: '940px',
    minWidth: '90%',
    height: '20em'
  };

  return (
    <ReactMapboxGl
      style={mapOptions.style}
      accessToken={accessToken}
      center={mapOptions.center}
      containerStyle={containerStyle}
      pitch={mapOptions.pitch}
    >
      {places.map((place) =>
        <Layer
          key={place.id}
          type="symbol"
          id={place.id}
          layout={{ 'icon-image': 'library-15' }}
        >
          <Feature coordinates={[place.lng, place.lat]} />
        </Layer>
      )}
    </ReactMapboxGl>
  );
};

ReactMapboxGLMap.propTypes = {
  accessToken: PropTypes.string,
  mapCenter: PropTypes.object,
  places: PropTypes.array
};

export default ReactMapboxGLMap;
