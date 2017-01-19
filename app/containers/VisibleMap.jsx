import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { setSearchTerm, fetchPlaces } from '../actions/pdp';
import ContentSearchInput from '../components/ContentSearchInput';
import MapContainer from '../components/MapContainer';

class VisibleMap extends Component {
  constructor(props) {
    super(props);
    this.state = { searchTerm: props.searchTerm };
    this.handleSearchValueUpdate = this.handleSearchValueUpdate.bind(this);
    this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
  }

  componentDidMount() {
    const { dispatch, searchTerm } = this.props;
    dispatch(fetchPlaces(searchTerm));
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.searchTerm !== this.props.searchTerm) {
      const { dispatch, query } = nextProps;
      dispatch(fetchPlaces(query));
    }
  }

  handleSearchValueUpdate(event) {
    // setState will re-render
    this.setState({ searchTerm: event.target.value });
  }

  handleSearchSubmit() {
    if (this.state.searchTerm) {
      this.props.dispatch(fetchPlaces(this.state.searchTerm));
    }
  }

  updateSearchTerm(query) {
    this.props.dispatch(setSearchTerm(query));
  }

  render() {
    const mapboxToken = 'pk.eyJ1Ijoic3RldmVueW91bmciLCJhIjoiY2l3anExbW4zMDAyOTJ0cXhwYnlpNGdmZSJ9.sjA5t0UMpCwyfVzZmzBVow';
    const mapboxTileLayer = 'https://api.mapbox.com/styles/v1/stevenyoung/ciy3lsmea00802srjvyz0f0as/tiles/256/{z}/{x}/{y}';
    return (
      <div className="home">

        <ContentSearchInput
          placeholder="Place? Movie? Book? Song?"
          searchValue={this.props.searchTerm}
          updateInput={this.handleSearchValueUpdate}
          onUserSubmit={this.handleSearchSubmit}
        />
        <MapContainer
          accessToken={mapboxToken}
          placeCollection={this.props.placeCollection}
          searchTerm={this.props.searchTerm}
          tileLayer={mapboxTileLayer}
        />
      </div>
    );
  }
}

VisibleMap.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  placeCollection: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  lastUpdated: PropTypes.number,
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
  const { searchTerm, places } = state;
  const isFetching = false;
  const placeCollection = places.items;
  return {
    searchTerm,
    placeCollection,
    isFetching
  };
};

VisibleMap.defaultProps = {
  placeCollection: []
};

export default connect(mapStateToProps)(VisibleMap);
