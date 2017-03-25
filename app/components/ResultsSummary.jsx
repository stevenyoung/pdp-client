import React from 'react';

import LocationLink from './LocationLink';
import EmptyLocationList from './EmptyLocationList';

const ResultsSummary = ({ results, searchTerm, handleLocationSelect }) => {
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

  let searchValueView;
  if (searchTerm && results.length > 0) {
    searchValueView = (
      <div className="resultssummary w-dyn-list searchterm">
        <span>matched {searchTerm}</span>
      </div>
    );
  } else {
    searchValueView = (
      <div className="resultssummary w-dyn-list">&nbsp;</div>
    );
  }

  return (
    <div className="resultssummary w-container listcontainer">
      {searchValueView}
      <div className="w-dyn-list">{listNodeContent}</div>
    </div>
  );
};

ResultsSummary.propTypes = {
  results: React.PropTypes.array,
  searchTerm: React.PropTypes.string,
  handleLocationSelect: React.PropTypes.func
};

ResultsSummary.defaultProps = {
  results: []
};

export default ResultsSummary;
