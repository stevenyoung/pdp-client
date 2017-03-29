import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import MapContainer from '../components/MapContainer';
import ResultsSummary from '../components/ResultsSummary';

const FilteredMapResults = (props) => {
  const mapboxToken = props.mapboxToken;
  const mapboxTileLayer = props.mapboxTileLayer;
  const searchTerm = props.query.searchTerm;
  return (
    <div className="resultsmap">
      <MapContainer
        accessToken={mapboxToken}
        placeCollection={props.placeCollection}
        searchTerm={searchTerm}
        tileLayer={mapboxTileLayer}
        mapCenter={props.mapCenter}
        dispatch={props.dispatch}
        handleLocationSelect={props.handleLocationSelect}
      />
      <ResultsSummary
        results={props.placeCollection}
        searchTerm={props.query.searchTerm}
        previousQueries={props.previousQueries}
        dispatch={props.dispatch}
        handleLocationSelect={props.handleLocationSelect}
      />
    </div>
  );
};

FilteredMapResults.propTypes = {
  mapboxToken: PropTypes.string,
  mapboxTileLayer: PropTypes.string,
  query: PropTypes.object.isRequired,
  previousQueries: PropTypes.object,
  placeCollection: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired,
  mapCenter: PropTypes.object,
  handleLocationSelect: PropTypes.func,
  displayPlace: PropTypes.object
};

const mapStateToProps = (state) => {
  const { query, places, mapCenter } = state;
  const isFetching = false;
  const placeCollection = places.items;
  return {
    query,
    placeCollection,
    mapCenter,
    isFetching
  };
};

FilteredMapResults.defaultProps = {
  placeCollection: []
};

export default connect(mapStateToProps)(FilteredMapResults);
