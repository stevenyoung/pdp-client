import React from 'react';
import { Link } from 'react-router';

import { connect } from 'react-redux';
// import icons from 'glyphicons';

import { updateMapCenter, fetchPlacesByLocation } from '../actions/pdp';


const GeolocationButton = (props) => {
  // console.info('I' + icons.heart + ' Glyphicons!');
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
        here
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
