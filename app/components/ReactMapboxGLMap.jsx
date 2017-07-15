import React from 'react';
import PropTypes from 'prop-types';
import ReactMapboxGl, { GeoJSONLayer, Source } from 'react-mapbox-gl';

class ReactMapboxGLMap extends React.Component {
  mapStyles = [
    'mapbox://styles/stevenyoung/cj4zv8wkf0jz62qo60yv3y59k', // standard (retro)
    'mapbox://styles/stevenyoung/cj3o3a3ro002v2smj6bzelzw0', // moonlight
    'mapbox://styles/mapbox/streets-v10',
    'mapbox://styles/stevenyoung/cj33q0fhu00352snzjostxzzw', // satellite
    'mapbox://styles/mapbox/satellite-streets-v10'
  ];

  mapOptions = {
    style: this.mapStyles[0],
    center: [this.props.mapCenter.place.lng, this.props.mapCenter.place.lat],
    attributionControl: false,
    zoom: 11,
    pitch: 30
  };

  containerStyle = {
    backgroundColor: 'pink',
    marginLeft: 'auto',
    marginRight: 'auto',
    // maxWidth: '940px',
    minWidth: '90%',
    height: '20em',
    minHeight: '20em'
  };

  symbolLayout = {
    'icon-image': 'circle-stroked-15',
    'text-field': '{title}',
    'text-font': ['Open Sans Semibold', 'Arial Unicode MS Bold'],
    'text-offset': [0, 0.6],
    'text-anchor': 'top',
    'text-size': 12,
    'text-transform': 'lowercase',
  }

  circleLayout = {
    'circle-radius': 6,
    'circle-blur': 0.8,
    'circle-color': '#3898ec',
    'circle-opacity': 0.8,
    'circle-stroke-width': 0.1
  }

  geoJsonFeatureCollection(places) {
    const geoJsonData = { type: 'FeatureCollection' };
    const features = [];
    places.forEach((place) => {
      const feature = {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [place.lng, place.lat]
        },
        properties: {
          title: place.name
        }
      };
      features.push(feature);
    });
    geoJsonData.features = features;
    return geoJsonData;
  }

  render() {
    return (
      <ReactMapboxGl
        style={this.mapOptions.style}
        accessToken={this.props.accessToken}
        center={[this.props.mapCenter.place.lng, this.props.mapCenter.place.lat]}
        containerStyle={this.containerStyle}
        pitch={this.mapOptions.pitch}
        onClick={this.props.onClick}
        movingMethod="easeTo"
      >
        <Source id={this.sourceId} />
        <GeoJSONLayer
          key="geojsonlayer"
          data={this.geoJsonFeatureCollection(this.props.places)}
          symbolLayout={this.symbolLayout}
          circlePaint={this.circleLayout}
        />
      </ReactMapboxGl>
    );
  }
}

ReactMapboxGLMap.propTypes = {
  accessToken: PropTypes.string,
  mapCenter: PropTypes.object,
  places: PropTypes.array,
  onClick: PropTypes.func,
  searchTerm: PropTypes.string
};

export default ReactMapboxGLMap;
