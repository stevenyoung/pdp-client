import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {
  setSearchTerm,
  fetchPlacesByQuery,
  updateQueryList } from '../actions/pdp';

import ContentSearchInput from '../components/ContentSearchInput';

class Home extends Component {
  handleSearchValueUpdate = (event) => {
    this.props.dispatch(setSearchTerm(event.target.value));
  }

  handleKeyboardSubmit = (event) => {
  // DEPR event.which in favor of KeyboardEvent.code === 'Enter'.
  // But Safari 10.0 is late.
    if (event.nativeEvent.which === 13 || event.nativeEvent.code === 'Enter') {
      this.handleSearchSubmit();
    }
  }

  handleSearchSubmit = () => {
    const term = this.props.query.searchTerm.trim();
    this.props.dispatch(setSearchTerm(term));
    this.props.dispatch(fetchPlacesByQuery(term));
    this.props.dispatch(updateQueryList(term, this.props.previousQueries));
  }

  render() {
    return (
      <div className="home">
        <ContentSearchInput
          placeholder="Place? Movie? Book? Song?"
          searchValue={this.props.query.searchTerm}
          updateInput={this.handleSearchValueUpdate}
          onUserSubmit={this.handleSearchSubmit}
          onKeyboardEnter={this.handleKeyboardSubmit}
        />
        <div className="maincontent">{this.props.children}</div>
      </div>
    );
  }
}

Home.propTypes = {
  children: PropTypes.node,
  query: PropTypes.object,
  placeCollection: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  isUserUpdating: PropTypes.bool,
  dispatch: PropTypes.func.isRequired,
  mapCenter: PropTypes.object,
  displayPlace: PropTypes.object,
  previousQueries: PropTypes.object
};

Home.defaultProps = {
  placeCollection: []
};

const mapStateToProps = (state) => {
  const { query, places, mapCenter, displayPlace, previousQueries } = state;
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
    previousQueries
  };
};

export default connect(mapStateToProps)(Home);
export { Home };
