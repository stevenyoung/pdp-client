import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { fetchPlaces } from '../actions/pdp';
import MapContainer from '../components/MapContainer';

class VisibleMapResults extends Component {
  constructor(props) {
    super(props);
    this.state = { query: props.query };
  }

  componentDidMount() {
    const { dispatch, query } = this.props;
    dispatch(fetchPlaces(query.searchTerm));
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

VisibleMapResults.defaultProps = {
  placeCollection: []
};

export default connect(mapStateToProps)(VisibleMapResults);
