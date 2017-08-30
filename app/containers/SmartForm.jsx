import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import Form from '../components/Form';

const mapStateToProps = (state) => {

}

const SmartForm = connect(state => state, actions)(Form);