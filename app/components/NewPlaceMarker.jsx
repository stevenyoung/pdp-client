import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

const NewPlaceMarker = (props) =>
(
  <span className="addplace">
    <Link
      className="w-button"
      onClick={props.onClick}
    >
      +
    </Link>
  </span>
);

NewPlaceMarker.propTypes = {
  onClick: PropTypes.func,
  position: PropTypes.object
};

NewPlaceMarker.defaultProps = {
  position: { lat: 0.0, lng: 0.0 }
};

export default NewPlaceMarker;
