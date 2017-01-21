import React from 'react';
import mapboxgl from 'mapbox-gl';

const mapElem = 'mbglmap';

class MapboxGLMap extends React.Component {
  static propTypes = {
    accessToken: React.PropTypes.string
  }

  componentDidMount() {
    mapboxgl.accessToken = this.props.accessToken;
    this.initializeMap();
  }

  initializeMap() {
    const mapOptions = {
      container: mapElem,
      style: 'mapbox://styles/mapbox/streets-v9'
    };

    this.mapboxgl = new mapboxgl.Map(mapOptions);
  }

  render() {
    return (
      <div className="mbglmapcontainer" >
        <div id={mapElem} />
      </div>
    );
  }
}

export default MapboxGLMap;
