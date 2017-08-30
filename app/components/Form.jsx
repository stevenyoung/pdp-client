import React from 'react';
import PropTypes from 'prop-types';

export default class Form extends React.Component {
  render() {
    return (
      <form>
        {this.props.children}
      </form>
    );
  }
}

Form.propTypes = {
  children: PropTypes.node
};

