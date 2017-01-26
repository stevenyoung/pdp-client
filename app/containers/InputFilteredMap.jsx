import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { updateMapCenter, updateDisplayedPlace } from '../actions/pdp';

import FilteredMapResults from './FilteredMapResults';

class InputFilteredMap extends Component {
  constructor(props) {
    super(props);
    this.handleLocationSelect = this.handleLocationSelect.bind(this);
  }

  handleLocationSelect(location) {
    this.props.dispatch(updateMapCenter({
      lat: location.lat,
      lng: location.lng
    }));
    this.props.dispatch(updateDisplayedPlace(location));
  }

  render() {
    const mapboxToken = 'pk.eyJ1Ijoic3RldmVueW91bmciLCJhIjoiY2l3anExbW4zMDAyOTJ0cXhwYnlpNGdmZSJ9.sjA5t0UMpCwyfVzZmzBVow';
    const mapboxTileLayer = 'https://api.mapbox.com/styles/v1/stevenyoung/ciy3lsmea00802srjvyz0f0as/tiles/256/{z}/{x}/{y}';
    return (
      <div>
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
  dispatch: PropTypes.func.isRequired,
  mapCenter: PropTypes.object
};

export default connect()(InputFilteredMap);