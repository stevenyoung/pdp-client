import React from 'react';

import $ from 'jquery';

import Leafletmap from './Leafletmap';
import ResultsSummary from './ResultsSummary';

class MapContainer extends React.Component {
  // contains two nodes: the map node, and a list of locations
  // selecting a location should update the map, centering it on selection

  constructor(props) {
    super(props);
    this.mapSettings = {
      accessToken: props.accessToken,
      tileUrl: 'https://api.mapbox.com/styles/v1/mapbox/light-v9/tiles/256/{z}/{x}/{y}',
      defaultZoom: 9,
      maxZoom: 18
    };
  }

  requestPlaceData(location) {
    const nearbyPlacesUrl = `http://localhost:5000/places/near/${location.lat}/${location.lng}`;
    this.serverRequest = $.get(nearbyPlacesUrl, (response) => {
      this.setState({ placeCollection: response.result });
    });
  }

  render() {
    return (
      <div className="mapcontainer">
        <Leafletmap
          center={this.props.userLocation}
          places={this.props.placeCollection}
          mapSettings={this.mapSettings}
        />
        <ResultsSummary places={this.props.placeCollection} />
      </div>
    );
  }
}

MapContainer.propTypes = {
  accessToken: React.PropTypes.string,
  userLocation: React.PropTypes.object,
  placeCollection: React.PropTypes.array,
  onUserUpdate: React.PropTypes.func
};

MapContainer.defaultProps = {
  userLocation: { lat: 37.749202, lng: -122.41575 }
};

export default MapContainer;
