import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { setSearchTerm, fetchPlaces, updateMapCenter } from '../actions/pdp';

import ContentSearchInput from '../components/ContentSearchInput';
import FilteredMapResults from './FilteredMapResults';

class InputFilteredMap extends Component {
  constructor(props) {
    super(props);
    this.handleSearchValueUpdate = this.handleSearchValueUpdate.bind(this);
    this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
    this.handleLocationSelect = this.handleLocationSelect.bind(this);
  }

  handleLocationSelect(location) {
    this.props.dispatch(updateMapCenter({
      lat: location.lat,
      lng: location.lng
    }));
  }

  handleSearchValueUpdate(event) {
    this.props.dispatch(setSearchTerm(event.target.value));
  }

  handleSearchSubmit() {
    this.props.dispatch(fetchPlaces(this.props.query.searchTerm));
  }

  render() {
    const mapboxToken = 'pk.eyJ1Ijoic3RldmVueW91bmciLCJhIjoiY2l3anExbW4zMDAyOTJ0cXhwYnlpNGdmZSJ9.sjA5t0UMpCwyfVzZmzBVow';
    const mapboxTileLayer = 'https://api.mapbox.com/styles/v1/stevenyoung/ciy3lsmea00802srjvyz0f0as/tiles/256/{z}/{x}/{y}';
    return (
      <div>
        <ContentSearchInput
          placeholder="Place? Movie? Book? Song?"
          searchValue={this.props.query.searchTerm}
          updateInput={this.handleSearchValueUpdate}
          onUserSubmit={this.handleSearchSubmit}
        />
        <FilteredMapResults
          mapboxToken={mapboxToken}
          mapboxTileLayer={mapboxTileLayer}
          query={this.props.query}
          mapCenter={this.props.mapCenter}
          handleLocationSelect={this.handleLocationSelect}
        />
      </div>
    );
  }
}

InputFilteredMap.propTypes = {
  query: PropTypes.object,
  placeCollection: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  lastUpdated: PropTypes.number,
  dispatch: PropTypes.func.isRequired,
  mapCenter: PropTypes.object
};

const mapStateToProps = (state) => {
  const { query, places, mapCenter } = state;
  const isFetching = false;
  const placeCollection = places.items;
  return {
    query,
    placeCollection,
    isFetching,
    mapCenter
  };
};

InputFilteredMap.defaultProps = {
  placeCollection: []
};

export default connect(mapStateToProps)(InputFilteredMap);
