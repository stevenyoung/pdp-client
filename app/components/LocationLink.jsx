import React from 'react';
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
        <span className="location-work-name">{props.place.title}</span>
        &nbsp;by&nbsp;
        <span className="location-work-artist">{props.place.author}</span>
      </div>
    </Link>
  </div>
);

LocationLink.propTypes = {
  place: React.PropTypes.object,
  onClick: React.PropTypes.func,
  dispatch: React.PropTypes.func
};

export default connect()(LocationLink);
