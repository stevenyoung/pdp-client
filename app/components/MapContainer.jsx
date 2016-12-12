import React from 'react';


class MapContainer extends React.Component {
  componentDidMount() {
    const mymap = L.map('leafletmap').setView([51.505, -0.09], 13);
    L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v9/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1Ijoic3RldmVueW91bmciLCJhIjoiY2l3anExbW4zMDAyOTJ0cXhwYnlpNGdmZSJ9.sjA5t0UMpCwyfVzZmzBVow', { maxZoom: 18 }).addTo(mymap);
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
