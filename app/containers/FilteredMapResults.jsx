import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import MapContainer from '../components/MapContainer';
import ResultsSummary from '../components/ResultsSummary';

class FilteredMapResults extends Component {
  constructor(props) {
    super(props);
    this.state = { query: props.query };
  }

  render() {
    const mapboxToken = this.props.mapboxToken;
    const mapboxTileLayer = this.props.mapboxTileLayer;
    const searchTerm = this.props.query.searchTerm;
    return (
      <div className="resultsmap">
        <MapContainer
          accessToken={mapboxToken}
          placeCollection={this.props.placeCollection}
          searchTerm={searchTerm}
          tileLayer={mapboxTileLayer}
          mapCenter={this.props.mapCenter}
          dispatch={this.props.dispatch}
          handleLocationSelect={this.props.handleLocationSelect}
        />
        <ResultsSummary
          results={this.props.placeCollection}
          searchTerm={this.props.query.searchTerm}
          dispatch={this.props.dispatch}
          handleLocationSelect={this.props.handleLocationSelect}
        />
      </div>
    );
  }
}

FilteredMapResults.propTypes = {
  mapboxToken: PropTypes.string,
  mapboxTileLayer: PropTypes.string,
  query: PropTypes.object.isRequired,
  placeCollection: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  lastUpdated: PropTypes.number,
  dispatch: PropTypes.func.isRequired,
  mapCenter: PropTypes.object,
  handleLocationSelect: PropTypes.func
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
