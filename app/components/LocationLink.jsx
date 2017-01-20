import React from 'react';
import { Link } from 'react-router';

import { updateMapCenter } from '../actions/pdp';

const LocationLink = (props) => {
  const handleLocationSelect = (location) => {
    console.log('selected', location);
    if (location.lat) {
      props.dispatch(updateMapCenter({
        lat: location.lat,
        lng: location.lng
      }));
    }
  };

  return (
    <div
      className="locationitem"
      key={props.place.id}
    >
      <Link
        onClick={handleLocationSelect}
      >
        <div>
          <span className="location-work-title">{props.place.scenelocation}</span>
          &nbsp;
          <span className="location-work-name">{props.place.title}</span>
          &nbsp;by&nbsp;
          <span className="location-work-artist">{props.place.author}</span>
        </div>
      </Link>
    </div>
  );
};


LocationLink.propTypes = {
  place: React.PropTypes.object,
  onClick: React.PropTypes.func,
  dispatch: React.PropTypes.func
};

export default LocationLink;
