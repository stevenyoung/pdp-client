import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

import { connect } from 'react-redux';

const LocationLink = (props) =>
(
  <div
    className="locationitem"
    key={props.place.id}
  >
    <Link
      onClick={() => props.onClick(props.place)}
    >
      <div>
        <span className="location-work-title">{props.place.name}</span>
        &nbsp;
        <span className="location-work-name">{props.place.artwork}</span>
        &nbsp;by&nbsp;
        <span className="location-work-artist">{props.place.artist}</span>
      </div>
    </Link>
  </div>
);

LocationLink.propTypes = {
  place: PropTypes.object,
  onClick: PropTypes.func,
  dispatch: PropTypes.func
};

export default connect()(LocationLink);
export { LocationLink };

