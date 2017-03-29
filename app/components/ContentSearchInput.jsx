import React from 'react';

import { SearchForm, MobileSearchForm } from './SearchForm';

const ContentSearchInput = (props) => {
  const appTitle = 'places.press';
  return (
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
          <span className="app-title">{appTitle}</span>
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
};

ContentSearchInput.propTypes = {
  placeholder: React.PropTypes.string,
  searchValue: React.PropTypes.string,
  onUserSubmit: React.PropTypes.func,
  updateInput: React.PropTypes.func,
  onKeyboardEnter: React.PropTypes.func
};

export default ContentSearchInput;
