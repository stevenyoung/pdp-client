import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';

import { updateMapCenter, updateDisplayedPlace } from '../actions/pdp';

import FilteredMapResults from '../components/FilteredMapResults';

export class InputFilteredMap extends Component {
  handleLocationSelect = (location) => {
    this.props.dispatch(updateMapCenter({
      lat: location.lat,
      lng: location.lng
    }));
    this.props.dispatch(updateDisplayedPlace(location));
  }

  render() {
    let mapboxToken = 'pk.eyJ1Ijoic3RldmVueW91bmciLCJhIjoiY2l3anExbW4zMDAyOT';
    mapboxToken += 'J0cXhwYnlpNGdmZSJ9.sjA5t0UMpCwyfVzZmzBVow';
    let mapboxTileLayer = 'https://api.mapbox.com/styles/v1/stevenyoung/';
    mapboxTileLayer += 'ciy3lsmea00802srjvyz0f0as/tiles/256/{z}/{x}/{y}';
    return (
      <div>
        <FilteredMapResults
          mapboxToken={mapboxToken}
          mapboxTileLayer={mapboxTileLayer}
          query={this.props.query}
          previousQueries={this.props.previousQueries}
          mapCenter={this.props.mapCenter}
          handleLocationSelect={this.handleLocationSelect}
        />
      </div>
    );
  }
}

InputFilteredMap.propTypes = {
  query: PropTypes.object,
  dispatch: PropTypes.func.isRequired,
  mapCenter: PropTypes.object,
  previousQueries: PropTypes.object
};

const mapStateToProps = (state) => {
  const { query, places, mapCenter, displayPlace, queries, previousQueries } = state;
  const isFetching = false;
  const placeCollection = places.items;
  const isUserUpdating = false;
  return {
    query,
    placeCollection,
    isFetching,
    isUserUpdating,
    mapCenter,
    displayPlace,
    queries,
    previousQueries

  };
};

export default connect(mapStateToProps)(InputFilteredMap);
