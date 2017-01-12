import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { setSearchTerm, requestPlaces, receivePlaces, fetchPlaces } from '../actions/pdp';
import ContentSearchInput from '../components/ContentSearchInput';
import MapContainer from '../components/MapContainer';

class VisibleMap extends Component {
  // constructor(props) {
  //   super(props);
  //   this.handleChange = this.handleChange.bind(this);
  //   this.handleRefreshClick = this.handleRefreshClick.bind(this);
  // }

  componentDidMount() {
    const { dispatch, searchTerm } = this.props;
    dispatch(fetchPlaces(searchTerm));
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.searchTerm !== this.props.searchTerm) {
      const { dispatch, selectedSubreddit } = nextProps;
      dispatch(fetchPlaces(selectedSubreddit));
    }
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
          onUserUpdate={this.updatePlaceCollection}
        />
        <MapContainer
          accessToken={mapboxToken}
          placeCollection={this.props.placeCollection}
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

function mapStateToProps(state) {
  const { searchTerm, places } = state;
  const isFetching = false;
  const placeCollection = places.items;

  // const {
  //   isFetching,
  //   lastUpdated,
  //   items: posts
  // } = places[searchTerm] || {
  //   isFetching: true,
  //   items: []
  // };

  return {
    searchTerm,
    placeCollection,
    isFetching
  };
}

VisibleMap.defaultProps = {
  placeCollection: []
};

export default connect(mapStateToProps)(VisibleMap);
