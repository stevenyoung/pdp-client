import React from 'react';

const MobileSearchForm = (props) =>
  (
    <form
      className="mobilesearchform"
      onSubmit={props.submitSearch}
    >
      <input
        className="mobilesearch w-hidden-main w-hidden-medium w-hidden-small w-input"
        id="mobile-search-input"
        maxLength="256"
        placeholder={props.placeholder}
        type="text"
        onChange={props.updateInput}
        value={props.searchValue}
      />
      <a
        className="searchformsubmit w-button w-hidden-main w-hidden-medium w-hidden-small"
        onClick={props.submitSearch}
      >Go</a>
    </form>
  );

const SearchForm = (props) =>
  (
    <div className="logosearchformwrapper w-form">
      <form
        className="searchform"
        onSubmit={props.submitSearch}
      >
        <input
          autoFocus="autofocus"
          className="searchforminput w-input"
          maxLength="256"
          placeholder={props.placeholder}
          required="required"
          type="text"
          onChange={props.updateInput}
          // value={props.searchValue}
        />
        <a
          className="searchformsubmit w-button"
          onClick={props.submitSearch}
        >Go</a>
      </form>
    </div>
  );

MobileSearchForm.propTypes = {
  placeholder: React.PropTypes.string,
  searchValue: React.PropTypes.string,
  submitSearch: React.PropTypes.func,
  updateInput: React.PropTypes.func
};

SearchForm.propTypes = {
  placeholder: React.PropTypes.string,
  searchValue: React.PropTypes.string,
  submitSearch: React.PropTypes.func,
  updateInput: React.PropTypes.func
};

export { SearchForm, MobileSearchForm };
