import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';

class Results {

}

class ResultsProxy extends Component {
  static propTypes = {
    places: PropTypes.array
  }

  componentDidMount() {
    //
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.places !== this.props.places) {
      this.flyToCoords(nextProps.mapCenter.place);
    }
  }

}

const mapStateToProps = (state) => {
  const { places } = state;
  return {
    places
  };
};

export default connect(mapStateToProps)(ResultsProxy);