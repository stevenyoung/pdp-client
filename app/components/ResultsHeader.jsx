import React from 'react';
import PropTypes from 'prop-types';

const ResultsHeader = ({ searchValue, currentCount, previousQueries }) => {
  let searchValueView;
  const searchHeaderLabel = 'tap go to search for';
  if (searchValue.length > 0) {
    searchValueView = (
      <div className="resultssummary w-dyn-list searchterm">
        <span>{searchHeaderLabel} {searchValue}</span>
      </div>
    );
  }

  let previousQueryView;
  const previousQueryLabel = 'matched';
  const previousQueryTerm = previousQueries.terms[previousQueries.terms.length - 1];
  if (currentCount > 0 && previousQueryTerm) {
    previousQueryView = (
      <div className="resultssummary w-dyn-list searchterm">
        <span>{previousQueryLabel} {previousQueryTerm}</span>
      </div>
    );
  }

  return (
    <div>
      {searchValueView}
      {previousQueryView}
    </div>
  );
};

ResultsHeader.propTypes = {
  searchValue: PropTypes.string,
  currentCount: PropTypes.number,
  previousQueries: PropTypes.object
};

ResultsHeader.defaultProps = {
  searchValue: ''
};

export default ResultsHeader;
