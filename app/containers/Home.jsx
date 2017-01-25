import React from 'react';
import { connect } from 'react-redux';

import { setSearchTerm, fetchPlaces } from '../actions/pdp';

import ContentSearchInput from '../components/ContentSearchInput';

class Home extends React.Component {
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
    return (
      <div>
        <ContentSearchInput
          placeholder="Place? Movie? Book? Song?"
          searchValue={this.props.query.searchTerm}
          updateInput={this.handleSearchValueUpdate}
          onUserSubmit={this.handleSearchSubmit}
        />
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
  mapCenter: React.PropTypes.object
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
