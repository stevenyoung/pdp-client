import React from 'react';
import PropTypes from 'prop-types';
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';

class ReactMapboxGLMap extends React.Component {
  mapOptions = {
    style: 'mapbox://styles/mapbox/light-v9',
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

  layerLayout(place) {
    const layout = {
      'icon-image': 'library-15',
      'text-font': ['Open Sans Semibold', 'Arial Unicode MS Bold'],
      'text-offset': [0, 0.6],
      'text-anchor': 'top',
      'text-size': 12
    };
    layout['text-field'] = place.name.toLowerCase();
    return layout;
  }

  render() {
    return (
      <ReactMapboxGl
        style={this.mapOptions.style}
        accessToken={this.props.accessToken}
        center={this.mapOptions.center}
        containerStyle={this.containerStyle}
        pitch={this.mapOptions.pitch}
        onClick={this.props.onClick}
      >
        {this.props.places.map((place) => (
          <Layer
            key={place.id.toString()}
            type="symbol"
            id={place.id.toString()}
            layout={this.layerLayout(place)}
          >
            <Feature
              coordinates={[place.lng, place.lat]}
            />
          </Layer>
          )
        )}
      </ReactMapboxGl>
    );
  }
}

ReactMapboxGLMap.propTypes = {
  accessToken: PropTypes.string,
  mapCenter: PropTypes.object,
  places: PropTypes.array,
  onClick: PropTypes.func,
  handleMapClick: PropTypes.func,
  handleMarkerClick: PropTypes.func
};

export default ReactMapboxGLMap;
