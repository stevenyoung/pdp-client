import React from 'react';

const ResultsSummary = (props) => {
  let listNodeContent;
  if (props.places.length > 0) {
    listNodeContent = (
      <div className="locationlist w-dyn-items" id="locations-list">
        <div className="location-list-items w-dyn-item">
          {props.places.map((place) =>
            <div className="locationitem">
              <a className="location-name" href="/location" >
                {place.scenelocation}
              </a>
              <div className="location-work-title">
                {place.title}
              </div>
              <div className="location-artist">
                {place.author}
              </div>
            </div>
            )
          }
        </div>
      </div>);
  } else {
    listNodeContent = (
      <div className="w-dyn-empty">
        <div className="emptylocationlist">No items found.</div>
        <a className="more-locations w-button" href="/nearby">more nearby locations...</a>
      </div>
    );
  }
  return <div className="placelistitem w-dyn-list">{listNodeContent}</div>;
};

ResultsSummary.propTypes = {
  places: React.PropTypes.Array
};

export default ResultsSummary;
