import React from 'react';

const ResultsSummary = () =>
  (
    <div className="placelistitem w-dyn-list">
      <div className="locationlist w-dyn-items" id="locations-list">
        <div className="location-list-items w-dyn-item">
          <div className="locationitem">
            <a className="location-name" href="/location" />
            <div className="location-work-title" />
            <div className="location-artist" />
          </div>
        </div>
      </div>
      <div className="w-dyn-empty">
        <div className="emplylocationlist">No items found.</div>
        <a className="more-locations w-button" href="/nearby">more nearby locations...</a>
      </div>
    </div>
  );

export default ResultsSummary;
