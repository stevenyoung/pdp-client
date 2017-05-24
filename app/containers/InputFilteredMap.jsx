import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';

import { updateMapCenter, updateDisplayedPlace } from '../actions/pdp';

// import FilteredMapResults from '../components/FilteredMapResults';
import MapContainer from '../components/MapContainer';
import ResultsSummary from '../components/ResultsSummary';


class InputFilteredMap extends Component {
  handleLocationSelect = (location) => {
    console.log('location select', location);
    const offsetLat = location.lat + 0.01;
    this.props.dispatch(updateMapCenter({
      lat: offsetLat,
      lng: location.lng
    }));
    this.props.dispatch(updateDisplayedPlace(location));
  }

  handleMapClick = (event, mbEvent) => {
    console.log('handle map click', event, mbEvent);
  }

  handleMarkerClick = (event) => {
    console.log('handle marker click', event);
  }

  render() {
    let mapboxToken = 'pk.eyJ1Ijoic3RldmVueW91bmciLCJhIjoiY2l3anExbW4zMDAyOT';
    mapboxToken += 'J0cXhwYnlpNGdmZSJ9.sjA5t0UMpCwyfVzZmzBVow';
    let mapboxTileLayer = 'https://api.mapbox.com/styles/v1/stevenyoung/';
    mapboxTileLayer += 'ciy3lsmea00802srjvyz0f0as/tiles/256/{z}/{x}/{y}';
    return (
      <div>
        <div className="resultsmap">
          <MapContainer
            accessToken={mapboxToken}
            placeCollection={this.props.placeCollection}
            searchTerm={this.props.query.searchTerm}
            tileLayer={mapboxTileLayer}
            mapCenter={this.props.mapCenter}
            dispatch={this.props.dispatch}
            handleMapClick={this.handleMapClick}
            handleMarkerClick={this.handleMarkerClick}
          />
          <ResultsSummary
            results={this.props.placeCollection}
            searchTerm={this.props.query.searchTerm}
            previousQueries={this.props.previousQueries}
            dispatch={this.props.dispatch}
            handleLocationSelect={this.handleLocationSelect}
          />
        </div>
      </div>
    );
  }
}

InputFilteredMap.propTypes = {
  query: PropTypes.object.isRequired,
  previousQueries: PropTypes.object,
  placeCollection: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired,
  mapCenter: PropTypes.object,
  handleLocationSelect: PropTypes.func,
  handleMapClick: PropTypes.func,
  handleMarkerClick: PropTypes.func,
  displayPlace: PropTypes.object
};

InputFilteredMap.defaultProps = {
  placeCollection: []
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
