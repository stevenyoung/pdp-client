import React from 'react';

import { SearchForm, MobileSearchForm } from './SearchForm';

const ContentSearchInput = (props) => {
  const appTitle = 'places.press';
  return (
    <div className="searchinput w-form" >
      <MobileSearchForm
        placeholder={props.placeholder}
        searchValue={props.searchValue}
        submitSearch={props.onUserSubmit}
        updateInput={props.updateInput}
      />
      <div className="logosearchcontainer w-container">
        <div className="app-title">
          <span className="app-title">{appTitle}</span>
        </div>
        <SearchForm
          placeholder={props.placeholder}
          searchValue={props.searchValue}
          submitSearch={props.onUserSubmit}
          updateInput={props.updateInput}
        />
      </div>
    </div>
  );
};

ContentSearchInput.propTypes = {
  placeholder: React.PropTypes.string,
  searchValue: React.PropTypes.string,
  onUserSubmit: React.PropTypes.func,
  updateInput: React.PropTypes.func
};

export default ContentSearchInput;
