import React from 'react';

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
  selected: React.PropTypes.object
};

export default PlaceInfo;
