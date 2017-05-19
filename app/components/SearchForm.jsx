import React from 'react';
import PropTypes from 'prop-types';

const MobileSearchForm = (props) =>
  (
    <div
      className="mobilesearchform"
    >
      <input
        className="mobilesearch w-hidden-main w-hidden-medium w-hidden-small w-input"
        maxLength="256"
        placeholder={props.placeholder}
        required="required"
        type="text"
        onChange={props.updateInput}
      />
      <a
        className="searchformsubmit w-button w-hidden-main w-hidden-medium w-hidden-small"
        onClick={props.submitSearch}
      >Go</a>
    </div>
  );

const SearchForm = (props) =>
  (
    <div className="logosearchformwrapper w-form">
      <div
        className="searchform"
      >
        <input
          className="searchforminput w-input"
          maxLength="256"
          placeholder={props.placeholder}
          required="required"
          type="text"
          onChange={props.updateInput}
          onKeyUp={props.onKeyboardEnter}
        />
        <a
          className="searchformsubmit w-button"
          onClick={props.submitSearch}
        >Go</a>
      </div>
    </div>
  );

MobileSearchForm.propTypes = {
  placeholder: PropTypes.string,
  searchValue: PropTypes.string,
  submitSearch: PropTypes.func,
  updateInput: PropTypes.func,
  onKeyboardEnter: PropTypes.func
};

SearchForm.propTypes = {
  placeholder: PropTypes.string,
  searchValue: PropTypes.string,
  submitSearch: PropTypes.func,
  updateInput: PropTypes.func,
  onKeyboardEnter: PropTypes.func
};

export { SearchForm, MobileSearchForm };
