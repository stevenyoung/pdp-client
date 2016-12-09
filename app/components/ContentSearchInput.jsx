import React from 'react';

const ContentSearchInput = () =>
  (
    <div
      className="searchinput w-form"
    >
      <form
        className="mobilesearchform"
        data-name="Mobile Search From"
        id="wf-form-Mobile-Search-From"
        name="wf-form-Mobile-Search-From"
      >
        <input
          className="mobilesearch w-hidden-main w-hidden-medium w-hidden-small w-input"
          id="mobile-search-input"
          maxLength="256"
          placeholder="Place? Movie? Book? Song?   ..."
          type="text"
        />
        <a
          className="searchformsubmit w-button w-hidden-main w-hidden-medium w-hidden-small"
          data-ix="new-interaction"
        >Go</a>
      </form>
      <div className="w-form-done">
        <div>Thank you! Your submission has been received!</div>
      </div>
      <div className="w-form-fail">
        <div>Oops! Something went wrong while submitting the form</div>
      </div>
      <div className="logosearchcontainer w-container">
        <div className="app-title">
          <span className="app-title">places.press</span>
        </div>
        <div className="logosearchformwrapper w-form">
          <form
            className="searchform"
            data-name="Search Form"
            id="wf-form-Search-Form"
            name="wf-form-Search-Form"
          >
            <input
              autoFocus="autofocus"
              className="searchforminput w-input"
              data-name="SearchFormInput"
              id="SearchFormInput"
              maxLength="256"
              name="SearchFormInput"
              placeholder="Place? Movie? Book? Song?"
              required="required"
              type="text"
            />
            <a
              className="searchformsubmit w-button"
              data-ix="new-interaction"
            >Go</a>
          </form>
          <div className="w-form-done">
            <div>Thank you! Your submission has been received!</div>
          </div>
          <div className="w-form-fail">
            <div>Oops! Something went wrong while submitting the form</div>
          </div>
        </div>
      </div>
    </div>
  );


export default ContentSearchInput;
