import React from 'react';
import { Link } from 'react-router';

import { connect } from 'react-redux';
import { updateMapCenter, fetchPlacesByLocation } from '../actions/pdp';

export const GeolocationButton = (props) => {
  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log('getCurrentLocation', position);
      const pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
      props.dispatch(updateMapCenter(pos));
      props.dispatch(fetchPlacesByLocation(pos));
    });
  };

  return (
    <div className="more-locations">
      <Link
        className="w-button"
        onClick={getCurrentLocation}
      >
        get nearby locations
      </Link>
    </div>
  );
};

const mapStateToProps = (state) => {
  const { query, places, mapCenter, displayPlace } = state;
  const isFetching = false;
  const placeCollection = places.items;
  return {
    query,
    placeCollection,
    mapCenter,
    isFetching,
    displayPlace
  };
};

export default connect(mapStateToProps)(GeolocationButton);
