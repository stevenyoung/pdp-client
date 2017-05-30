import React from 'react';
import PropTypes from 'prop-types';

const PlaceInfo = (props) => {
  if (!props.selected.place) { return null; }
  if (!props.selected.place.name) { return null; }
  const place = props.selected.place;
  return (
    <div className="placeinfo">
      <div>
        <span className="placename location-work-title">{place.name}</span>
        <span className="placeartwork location-work-name"> from {place.artwork}
        </span>
        <span className="placeartist location-work-artist">  by {place.artist}
        </span>
        <p />
        <span className="placedesc">{place.scenedescription}</span>
      </div>
    </div>
  );
};

PlaceInfo.propTypes = {
  selected: PropTypes.object
};

export default PlaceInfo;
