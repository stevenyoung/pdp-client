import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import MapContainer from '../components/MapContainer';

class VisibleMapResults extends Component {
  constructor(props) {
    super(props);
    this.state = { query: props.query };
  }

  render() {
    const mapboxToken = this.props.mapboxToken;
    const mapboxTileLayer = this.props.mapboxTileLayer;
    const searchTerm = this.props.query.searchTerm;
    return (
      <div className="home">
        <MapContainer
          accessToken={mapboxToken}
          placeCollection={this.props.placeCollection}
          searchTerm={searchTerm}
          tileLayer={mapboxTileLayer}
          mapCenter={this.props.mapCenter}
          dispatch={this.props.dispatch}
        />
      </div>
    );
  }
}

VisibleMapResults.propTypes = {
  mapboxToken: PropTypes.string,
  mapboxTileLayer: PropTypes.string,
  query: PropTypes.object.isRequired,
  placeCollection: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  lastUpdated: PropTypes.number,
  dispatch: PropTypes.func.isRequired,
  mapCenter: PropTypes.object
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

VisibleMapResults.defaultProps = {
  placeCollection: []
};

export default connect(mapStateToProps)(VisibleMapResults);
