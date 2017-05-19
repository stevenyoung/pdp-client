import React from 'react';
import PropTypes from 'prop-types';

import EmptyLocationList from './EmptyLocationList';
import ResultsHeader from './ResultsHeader';
import ResultsList from './ResultsList';

const ResultsSummary = ({
  results,
  searchTerm,
  handleLocationSelect,
  previousQueries
}) => {
  const headerContent = (
    <ResultsHeader
      searchValue={searchTerm}
      currentCount={results.length}
      previousQueries={previousQueries}
    />
  );

  let listNodeContent;
  if (results.length > 0) {
    listNodeContent = (
      <ResultsList
        results={results}
        handleLocationSelect={handleLocationSelect}
      />
    );
  } else {
    listNodeContent = (
      <EmptyLocationList />
    );
  }

  return (
    <div className="resultssummary w-container listcontainer">
      {headerContent}
      <div className="w-dyn-list">{listNodeContent}</div>
    </div>
  );
};

ResultsSummary.propTypes = {
  results: PropTypes.array,
  searchTerm: PropTypes.string,
  previousQueries: PropTypes.object,
  handleLocationSelect: PropTypes.func
};

ResultsSummary.defaultProps = {
  results: []
};

export default ResultsSummary;
