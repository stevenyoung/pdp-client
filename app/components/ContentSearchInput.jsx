import React from 'react';
import $ from 'jquery';

import { SearchForm, MobileSearchForm } from './SearchForm';

class ContentSearchInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { searchValue: '' };
    this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
    this.handleInputBlur = this.handleInputBlur.bind(this);
  }

  handleSearchSubmit() {
    const searchUrl = `http://localhost:5000/search/${this.state.searchValue}`;
    this.serverRequest = $.get(searchUrl, (response) => {
      this.setState({ placeCollection: response.result });
    });
  }

  handleInputBlur(event) {
    this.setState({ searchValue: event.target.value });
  }

  render() {
    const appTitle = 'places.press';
    return (
      <div className="searchinput w-form" >
        <MobileSearchForm
          placeholder={this.props.placeholder}
          searchValue={this.state.searchValue}
          submitSearch={this.handleSearchSubmit}
          updateInput={this.handleInputBlur}
        />
        <div className="logosearchcontainer w-container">
          <div className="app-title">
            <span className="app-title">{appTitle}</span>
          </div>
          <SearchForm
            placeholder={this.props.placeholder}
            searchValue={this.state.searchValue}
            submitSearch={this.handleSearchSubmit}
            updateInput={this.handleInputBlur}
          />
        </div>
      </div>
    );
  }
}

ContentSearchInput.propTypes = { placeholder: React.PropTypes.string };

export default ContentSearchInput;
