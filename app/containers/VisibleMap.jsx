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
    // first time rendering
    const { dispatch, searchTerm } = this.props;
    console.log('map mounted', searchTerm);
    // dispatch(fetchPlaces(searchTerm));
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

  handleSearchSubmit(event, query) {
    if (this.state.searchTerm) {
      console.log('search submit', this.state);
      // this.props.dispatch(setSearchTerm(this.state.searchTerm));
      this.props.dispatch(fetchPlaces(this.state.searchTerm));
    }
  }

  updateSearchTerm(query) {
    this.props.dispatch(setSearchTerm(query));
  }

  // handleChange(nextSubreddit) {
  //   this.props.dispatch(setSearchTerm(nextSubreddit));
  //   this.props.dispatch(fetchPlaces(nextSubreddit));
  // }

  // handleRefreshClick(e) {
  //   e.preventDefault();
  //   const { dispatch, searchTerm } = this.props;
  //   dispatch(fetchPlaces(searchTerm));
  // }

  render() {
    const mapboxToken = 'pk.eyJ1Ijoic3RldmVueW91bmciLCJhIjoiY2l3anExbW4zMDAyOTJ0cXhwYnlpNGdmZSJ9.sjA5t0UMpCwyfVzZmzBVow';
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
  console.log('mapping', state);
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
