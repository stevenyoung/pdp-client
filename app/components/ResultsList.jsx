import React from 'react';

import LocationLink from './LocationLink';
import EmptyLocationList from './EmptyLocationList';

const ResultsList = ({ results, handleLocationSelect }) => {
  let listNodeContent;
  if (results.length > 0) {
    listNodeContent = (
      <div
        className="locationlist"
      >
        <div className="location-list-items">
          {results.map((place) =>
            <LocationLink
              place={place}
              key={place.id}
              onClick={handleLocationSelect}
            />
            )
          }
        </div>
      </div>);
  } else {
    listNodeContent = (
      <EmptyLocationList />
    );
  }

  return (
    <div className="resultssummary w-container listcontainer">
      <div className="w-dyn-list">{listNodeContent}</div>
    </div>
  );
};

ResultsList.propTypes = {
  results: React.PropTypes.array,
  handleLocationSelect: React.PropTypes.func
};

ResultsList.defaultProps = {
  results: []
};

export default ResultsList;
