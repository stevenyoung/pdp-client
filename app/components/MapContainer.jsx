import React from 'react';
import L from 'leaflet';

class MapContainer extends React.Component {
  constructor(props) {
    super(props);
    this.mapSettings = {
      accessToken: 'pk.eyJ1Ijoic3RldmVueW91bmciLCJhIjoiY2l3anExbW4zMDAyOTJ0cXhwYnlpNGdmZSJ9.sjA5t0UMpCwyfVzZmzBVow',
      tileUrl: 'https://api.mapbox.com/styles/v1/mapbox/light-v9/tiles/256/{z}/{x}/{y}',
      defaultZoom: 13,
      maxZoom: 18
    };
    this.state = {
      userLocation: {
        lng: 51.505,
        lat: -0.09
      },
    };
  }

  componentDidMount() {
    const mymap = L.map('leafletmap').setView([this.state.userLocation.lng,
      this.state.userLocation.lat], this.mapSettings.defaultZoom);
    L.tileLayer(`${this.mapSettings.tileUrl}?access_token=${this.mapSettings.accessToken}`,
      { maxZoom: this.mapSettings.maxZoom }
    ).addTo(mymap);
  }

  render() {
    return (
      <div className="googlemapcontainer w-container">
        <div
          id="leafletmap"
          className="googlemap w-widget w-widget-map"
          data-widget-latlng="51.511214,-0.119824"
          data-widget-style="roadmap"
          data-widget-zoom="12"
        />
      </div>
    );
  }
}

export default MapContainer;
