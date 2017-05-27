import React from 'react';
import PropTypes from 'prop-types';
import ReactMapboxGl, { GeoJSONLayer, Source } from 'react-mapbox-gl';

class ReactMapboxGLMap extends React.Component {
  mapOptions = {
    style: 'mapbox://styles/mapbox/streets-v10',
    // style: 'mapbox://styles/stevenyoung/cj33q0fhu00352snzjostxzzw',
    // style: 'mapbox://styles/mapbox/satellite-streets-v10',
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
    'text-font': ['Open Sans Semibold', 'Arial Unicode MS Bold'],
    'text-offset': [0, 0.6],
    'text-anchor': 'top',
    'text-size': 12,
    'text-field': '{title}'
  }

  circleLayout = {
    'circle-radius': 6,
    'circle-color': '#3898ec',
    'circle-opacity': 0.3
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
          title: place.name.toLowerCase(),
          icon: 'library'
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
