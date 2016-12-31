import React from 'react';
import $ from 'jquery';

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
        onClick={props.submitSearch}
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
          onBlur={props.updateInput}
        />
        <a
          className="searchformsubmit w-button"
          onClick={props.submitSearch}
        >Go</a>
      </form>
    </div>
  );


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

ContentSearchInput.propTypes = { placeholder: React.PropTypes.string };

export default ContentSearchInput;
