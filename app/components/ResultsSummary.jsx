import React from 'react';

const ResultsSummary = (props) =>
  (
    <div className="placelistitem w-dyn-list">
      <div className="locationlist w-dyn-items" id="locations-list">
        <div className="location-list-items w-dyn-item">
          {props.places.map((place) =>
            <div className="locationitem">
              <a className="location-name" href="/location" >
                {place.name}
              </a>
              <div className="location-work-title">
                {place.title}
              </div>
              <div className="location-artist">
                {place.artist}
              </div>
            </div>
            )
          }
        </div>
      </div>
      <div className="w-dyn-empty">
        <div className="emplylocationlist">No items found.</div>
        <a className="more-locations w-button" href="/nearby">more nearby locations...</a>
      </div>
    </div>
  );

ResultsSummary.propTypes = {
  places: React.PropTypes.Array
};

export default ResultsSummary;
