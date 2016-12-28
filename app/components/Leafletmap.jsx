import React from 'react';
import L from 'leaflet';

class Leafletmap extends React.Component {
  componentDidMount() {
    this.initializeLeafletMap();
    this.mapTiles.addTo(this.map);
    this.displayMapForCoords(this.props.center);
    this.displayMarkerCollection(this.props.places);
  }

  initializeLeafletMap() {
    this.map = L.map('leafletmap');
    this.mapTiles = L.tileLayer(
      `${this.props.mapSettings.tileUrl}?access_token=${this.props.mapSettings.accessToken}`,
      { maxZoom: this.props.mapSettings.maxZoom }
    );
  }

  displayMapForCoords(coords) {
    this.map.setView([coords.lat, coords.lng], this.props.mapSettings.defaultZoom);
  }

  displayMarkerCollection(places) {
    places.forEach((place) => {
      const markerLabel = this.popupMarkup(place);
      const markerCoords = {
        lat: place.location.latitude,
        lng: place.location.longitude
      };
      this.displayMarker(markerCoords, markerLabel);
    });
  }

  popupMarkup(place) {
    return (
      `<div class="leafletpopup">
        <h4>${place.scenelocation}</h4>
        <h5>${place.title} by ${place.author}</h5>
        <span>${place.scenedescription}</span>
      </div>`
    );
  }

  displayMarker(coords, message) {
    const marker = L.marker([coords.lat, coords.lng]);
    marker.bindPopup(message).openPopup().addTo(this.map);
  }

  render() {
    return (
      <div className="leafletmapcontainer">
        <div
          id="leafletmap"
        />
      </div>
    );
  }
}

Leafletmap.propTypes = {
  center: React.PropTypes.object,
  map: React.PropTypes.node,
  mapTiles: React.PropTypes.object,
  places: React.PropTypes.array,
  mapSettings: React.PropTypes.object
};

Leafletmap.defaultProps = {
  places: []
};

export default Leafletmap;
