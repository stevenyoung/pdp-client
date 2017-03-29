import React from 'react';

const ResultsHeader = ({ searchValue, currentCount, previousQueries }) => {
  let searchValueView;
  const searchHeaderLabel = 'tap go to search for';
  if (searchValue.length > 0) {
    searchValueView = (
      <div className="resultssummary w-dyn-list searchterm">
        <span>{searchHeaderLabel} {searchValue}</span>
      </div>
    );
  } else {
    searchValueView = (
      <div className="resultssummary w-dyn-list">&nbsp;</div>
    );
  }

  let previousQueryView;
  const previousQueryLabel = 'matched';
  const previousQueryTerm = previousQueries.terms[previousQueries.terms.length - 1];
  if (currentCount > 0) {
    previousQueryView = (
      <div className="resultssummary w-dyn-list searchterm">
        <span>{previousQueryLabel} {previousQueryTerm}</span>
      </div>
    );
  }

  return (
    <div className="resultssummary w-container listcontainer">
      {searchValueView}
      {previousQueryView}
    </div>
  );
};

ResultsHeader.propTypes = {
  searchValue: React.PropTypes.string,
  currentCount: React.PropTypes.number,
  previousQueries: React.PropTypes.object
};

ResultsHeader.defaultProps = {
  searchValue: ''
};

export default ResultsHeader;
