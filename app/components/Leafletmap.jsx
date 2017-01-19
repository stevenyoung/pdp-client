import React from 'react';
import L from 'leaflet';

class Leafletmap extends React.Component {
  componentDidMount() {
    this.initializeLeafletMap();
    this.mapTiles.addTo(this.map);
    this.displayMapForCoords(this.props.center);
    this.displayMarkerCollection(this.props.places);
  }

  componentDidUpdate(nextProps) {
    if (nextProps.places !== this.props.places) {
      this.displayMarkerCollection(this.props.places);
    }
  }

  initializeLeafletMap() {
    this.map = L.map('leafletmap');
    this.mapTiles = L.tileLayer(
      `${this.props.mapSettings.tileUrl}?access_token=${this.props.mapSettings.accessToken}`,
      {
        maxZoom: this.props.mapSettings.maxZoom,
        attribution: '<© Mapbox>'
      }
    );
  }

  displayMapForCoords(coords) {
    this.map.setView([coords.lat, coords.lng], this.props.mapSettings.defaultZoom);
  }

  displayMarkerCollection(places) {
    places.forEach((place) => {
      const markerLabel = this.popupMarkup(place);
      const markerCoords = {
        lat: place.loc.coordinates[1],
        lng: place.loc.coordinates[0],
      };
      this.displayMarker(markerCoords, markerLabel);
    });
  }

  popupMarkup(place) {
    return (
      `<div class="leafletpopup">
        <h4>${place.scenelocation}</h4>
        <em><h4>${place.title}</em> - <em>${place.author}</h4></em>
        <p>${place.scenedescription}</p>
        <p><a href="//${place.url}">${place.attribution}</a></p>
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
