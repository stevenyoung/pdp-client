import React from 'react';

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
  placeholder: React.PropTypes.string,
  searchValue: React.PropTypes.string,
  submitSearch: React.PropTypes.func,
  updateInput: React.PropTypes.func,
  onKeyboardEnter: React.PropTypes.func
};

SearchForm.propTypes = {
  placeholder: React.PropTypes.string,
  searchValue: React.PropTypes.string,
  submitSearch: React.PropTypes.func,
  updateInput: React.PropTypes.func,
  onKeyboardEnter: React.PropTypes.func
};

export { SearchForm, MobileSearchForm };
