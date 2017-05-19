import React from 'react';
import PropTypes from 'prop-types';

class Footer extends React.Component {
  static propTypes = {
    copyright: PropTypes.string
  }
  static defaultProps = { copyright: '' }
  render() {
    return (
      <footer className="footer" >
        <div className="Footer">
          {this.props.copyright ? <p>{ this.props.copyright}</p> : ''}
          {this.props.children}
        </div>
      </footer>
    );
  }
}

Footer.propTypes = {
  children: React.PropTypes.node
};

export default Footer;
