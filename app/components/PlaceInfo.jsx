import React from 'react';
import PropTypes from 'prop-types';

const PlaceInfo = (props) => {
  if (props.selected.place) {
    const place = props.selected.place;
    return (
      <div className="placeinfo">
        <div>
          <span className="placename">{place.name}</span>
          <span className="placeartwork"> from {place.artwork}</span>
          <span className="placeartist"> by {place.artist}</span>
          <p />
          <span className="placedesc">{place.scenedescription}</span>
        </div>
      </div>
    );
  }
  return (<div />);
};

PlaceInfo.propTypes = {
  selected: PropTypes.object
};

export default PlaceInfo;
