import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

const AddPlaceButton = (props) => (
  <span className="addplace">
    <Link
      to="/new"
      className="w-button"
      onClick={props.onClick}
    >
      +
    </Link>
  </span>
);

AddPlaceButton.propTypes = {
  onClick: PropTypes.func,
  position: PropTypes.object
};

AddPlaceButton.defaultProps = {
  position: { lat: 0.0, lng: 0.0 }
};

export default AddPlaceButton;
