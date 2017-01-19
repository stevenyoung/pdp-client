import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { setSearchTerm, fetchPlaces } from '../actions/pdp';

import ContentSearchInput from '../components/ContentSearchInput';
import VisibleMapResults from './VisibleMapResults';

class VisibleMap extends Component {
  constructor(props) {
    super(props);
    this.handleSearchValueUpdate = this.handleSearchValueUpdate.bind(this);
    this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
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
        <VisibleMapResults
          mapboxToken={mapboxToken}
          mapboxTileLayer={mapboxTileLayer}
          query={this.props.query}
        />
      </div>
    );
  }
}

VisibleMap.propTypes = {
  query: PropTypes.object,
  placeCollection: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  lastUpdated: PropTypes.number,
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
  const { query, places } = state;
  const isFetching = false;
  const placeCollection = places.items;
  return {
    query,
    placeCollection,
    isFetching
  };
};

VisibleMap.defaultProps = {
  placeCollection: []
};

export default connect(mapStateToProps)(VisibleMap);
