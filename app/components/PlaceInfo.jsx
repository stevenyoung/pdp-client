import React from 'react';
import PropTypes from 'prop-types';

const PlaceInfo = (props) => {
  if (props.selected.place) {
    const place = props.selected.place;
    return (
      <div className="placeinfo">
        <div>
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
