import React from 'react';

import LocationLink from './LocationLink';

const ResultsSummary = ({ results, searchTerm, onItemSelect }) => {
  let listNodeContent;
  if (results.length > 0) {
    listNodeContent = (
      <div className="locationlist w-dyn-items" id="locations-list">
        <div className="location-list-items w-dyn-item">
          {results.map((place) =>
            <LocationLink
              place={place}
              key={place.id}
            />
            )
          }
        </div>
      </div>);
  } else {
    listNodeContent = (
      <div className="locationlist">
        <div className="emptylocationlist">No items found.</div>
        <a className="more-locations w-button" href="/nearby">more nearby locations...</a>
      </div>
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
    <div className="w-container">
      {searchValueView}
      <div className="resultssummary w-dyn-list">{listNodeContent}</div>
    </div>
  );
};

ResultsSummary.propTypes = {
  results: React.PropTypes.array,
  searchTerm: React.PropTypes.string,
  onItemSelect: React.PropTypes.func
};

ResultsSummary.defaultProps = {
  results: []
};

export default ResultsSummary;
