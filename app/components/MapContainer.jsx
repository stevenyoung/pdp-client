import React from 'react';

const MapContainer = () =>
  (
    <div className="googlemapcontainer w-container">
      <div
        className="googlemap w-widget w-widget-map"
        data-widget-latlng="51.511214,-0.119824"
        data-widget-style="roadmap"
        data-widget-zoom="12"
      />
    </div>
  );

export default MapContainer;
