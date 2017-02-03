import React from 'react';
import { connect } from 'react-redux';

import { setSearchTerm, fetchPlacesByQuery } from '../actions/pdp';

import ContentSearchInput from '../components/ContentSearchInput';
import PlaceInfo from '../components/PlaceInfo';

class Home extends React.Component {
  handleSearchValueUpdate = (event) => {
    this.props.dispatch(setSearchTerm(event.target.value));
  }

  handleSearchSubmit = () => {
    this.props.dispatch(fetchPlacesByQuery(this.props.query.searchTerm));
  }

  render() {
    return (
      <div>
        <ContentSearchInput
          placeholder="Place? Movie? Book? Song?"
          searchValue={this.props.query.searchTerm}
          updateInput={this.handleSearchValueUpdate}
          onUserSubmit={this.handleSearchSubmit}
        />
        <PlaceInfo selected={this.props.displayPlace} />
        <div className="maincontent">{this.props.children}</div>
      </div>
    );
  }
}

Home.propTypes = {
  children: React.PropTypes.node,
  query: React.PropTypes.object,
  placeCollection: React.PropTypes.array.isRequired,
  isFetching: React.PropTypes.bool.isRequired,
  dispatch: React.PropTypes.func.isRequired,
  mapCenter: React.PropTypes.object,
  displayPlace: React.PropTypes.object
};

Home.defaultProps = {
  placeCollection: []
};

const mapStateToProps = (state) => {
  const { query, places, mapCenter, displayPlace } = state;
  const isFetching = false;
  const placeCollection = places.items;
  return {
    query,
    placeCollection,
    isFetching,
    mapCenter,
    displayPlace
  };
};

export default connect(mapStateToProps)(Home);
