import React from 'react';
import { PropTypes } from 'prop-types';

import { SearchForm, MobileSearchForm } from './SearchForm';

const ContentSearchInput = (props) =>
(
  <div className="searchinput w-form" >
    <MobileSearchForm
      placeholder={props.placeholder}
      updateInput={props.updateInput}
      searchValue={props.searchValue}
      submitSearch={props.onUserSubmit}
      onKeyboardEnter={props.onKeyboardEnter}
    />
    <div className="logosearchcontainer w-container">
      <div className="app-title">
        <span className="app-title">places.press</span>
      </div>
      <SearchForm
        placeholder={props.placeholder}
        updateInput={props.updateInput}
        searchValue={props.searchValue}
        submitSearch={props.onUserSubmit}
        onKeyboardEnter={props.onKeyboardEnter}
      />
    </div>
  </div>
);

ContentSearchInput.propTypes = {
  placeholder: PropTypes.string,
  searchValue: PropTypes.string,
  onUserSubmit: PropTypes.func,
  updateInput: PropTypes.func,
  onKeyboardEnter: PropTypes.func
};

export default ContentSearchInput;
