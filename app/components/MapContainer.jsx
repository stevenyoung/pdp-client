import React from 'react';
import L from 'leaflet';
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
      defaultZoom: 13,
      maxZoom: 18
    };
  }

  componentDidMount() {
    // this.requestPlaceData(this.props.userLocation);
    this.initializeLeafletMap();
    this.displayMapForCoords(this.props.userLocation);
    this.mapTiles.addTo(this.map);
    this.displayMarker(this.props.userLocation, '<b>Hello world!</b><br>I am a popup.');
    this.props.placeCollection.forEach((place) => {
      const markerCoords = {
        lat: place.location.latitude,
        lng: place.location.longitude
      };
      const markerLabel = `${place.scenelocation} from ${place.title} by ${place.author}`;
      this.displayMarker(markerCoords, markerLabel);
    });
  }

  initializeLeafletMap() {
    this.map = L.map('leafletmap');
    this.mapTiles = L.tileLayer(
      `${this.mapSettings.tileUrl}?access_token=${this.mapSettings.accessToken}`,
      { maxZoom: this.mapSettings.maxZoom }
    );
  }

  displayMapForCoords(coords) {
    this.map.setView([coords.lng, coords.lat], this.mapSettings.defaultZoom);
  }

  displayMarker(coords, message) {
    const marker = L.marker([coords.lng, coords.lat]);
    marker.bindPopup(message).openPopup().addTo(this.map);
  }

  requestPlaceData(location) {
    const nearbyPlacesUrl = `http://localhost:5000/places/near/${location.lat}/${location.lng}`;
    this.serverRequest = $.get(nearbyPlacesUrl, (response) => {
      this.setState({ placeCollection: response.result });
    });
  }

  displayMarkerCollection(places) {
    places.forEach((place) => {
      const markerLabel = `${place.name} from ${place.title} by ${place.author}`;
      const markerCoords = { lat: place.lat, lng: place.lng };
      this.displayMarker(markerCoords, markerLabel);
    });
  }

  render() {
    return (
      <div className="mapcontainer">
        <Leafletmap
          center={this.props.userLocation}
          places={this.props.placeCollection}
        />
        <ResultsSummary places={this.props.placeCollection} />
      </div>
    );
  }
}

MapContainer.propTypes = {
  accessToken: React.PropTypes.string,
  userLocation: React.PropTypes.object,
  placeCollection: React.PropTypes.array
};

MapContainer.defaultProps = {
  userLocation: { lat: -122.419416, lng: 37.774929 }
};

export default MapContainer;
