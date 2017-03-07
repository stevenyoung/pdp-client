import React from 'react';
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
      <Layer
        type="symbol"
        id="marker"
        layout={{ 'icon-image': 'marker-15' }}
      >
        <Feature coordinates={[mapCenter.place.lng, mapCenter.place.lat]} />
      </Layer>
    </ReactMapboxGl>
  );
};

ReactMapboxGLMap.propTypes = {
  accessToken: React.PropTypes.string,
  mapCenter: React.PropTypes.object,
  places: React.PropTypes.array
};

export default ReactMapboxGLMap;
