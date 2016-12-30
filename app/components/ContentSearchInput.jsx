import React from 'react';

const MobileSearchForm = (props) =>
  (
    <form
      className="mobilesearchform"
    >
      <input
        className="mobilesearch w-hidden-main w-hidden-medium w-hidden-small w-input"
        id="mobile-search-input"
        maxLength="256"
        placeholder={props.placeholder}
        type="text"
      />
      <a
        className="searchformsubmit w-button w-hidden-main w-hidden-medium w-hidden-small"
      >Go</a>
    </form>
  );

const SearchForm = (props) =>
  (
    <div className="logosearchformwrapper w-form">
      <form
        className="searchform"
      >
        <input
          autoFocus="autofocus"
          className="searchforminput w-input"
          maxLength="256"
          placeholder={props.placeholder}
          required="required"
          type="text"
        />
        <a
          className="searchformsubmit w-button"
        >Go</a>
      </form>
    </div>
  );


const ContentSearchInput = (props) => {
  const appTitle = 'places.press';
  return (
    <div className="searchinput w-form" >
      <MobileSearchForm placeholder={props.placeholder} />
      <div className="logosearchcontainer w-container">
        <div className="app-title">
          <span className="app-title">{appTitle}</span>
        </div>
        <SearchForm placeholder={props.placeholder} />
      </div>
    </div>
  );
};

MobileSearchForm.propTypes = { placeholder: React.PropTypes.string };
SearchForm.propTypes = { placeholder: React.PropTypes.string };
ContentSearchInput.propTypes = { placeholder: React.PropTypes.string };

export default ContentSearchInput;

