import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router';

const NewPlaceForm = (props) => {
  const { handleSubmit } = props;
  return (
    <div>
      <span>new scene</span>
      <form className="newplaceform" onSubmit={handleSubmit}>
        <div>

          <span className="closebutton">
            <Link
              to="/"
              className="w-button"
            >
              x
            </Link>
          </span>
        </div>
        <span>
          <label htmlFor="artwork">Title</label>
          <Field
            name="firstName"
            component="input"
            type="text"
            className="w-input formtextinput"
          />
        </span>
        <span>
          <label htmlFor="lastName">Artist</label>
          <Field
            name="lastName"
            component="input"
            type="text"
            className="w-input formtextinput"
          />
        </span>
        <div>
          <label htmlFor="placename">Place</label>
          <Field
            name="placename"
            component="input"
            type="text"
            className="w-input formtextinput"
          />
        </div>
        <span>
          <Link
            className="w-button"
          >
          save
          </Link>
        </span>
      </form>
    </div>
  );
};

NewPlaceForm.propTypes = {
  handleSubmit: PropTypes.func
};

export default reduxForm({ form: 'newplace' })(NewPlaceForm);
