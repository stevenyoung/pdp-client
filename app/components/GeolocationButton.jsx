import React from 'react';
import { Link } from 'react-router';

import { connect } from 'react-redux';
import { updateMapCenter, fetchPlacesByLocation } from '../actions/pdp';

const GeolocationButton = (props) => {
  const getNearbyPlaces = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log('getCurrentLocation', position);
      const pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
      props.dispatch(fetchPlacesByLocation(pos));
      props.dispatch(updateMapCenter(pos));
    });
  };

  return (
    <span className="more-locations">
      <Link
        className="w-button"
        onClick={getNearbyPlaces}
      >
       get nearby locations
      </Link>
    </span>
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
export { GeolocationButton };
