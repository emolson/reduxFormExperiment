/**
 * Created by emols on 12/6/2017.
 */
import React from 'react';
import {string, object, array} from 'prop-types';
import {Field} from 'redux-form';

const renderField = (field) => (
  <div>
      <label>{field.label}:</label>
      <select {...field.input} placeholder={field.label}>
        <option key="" value="">{""}</option>
        {field.options.map(state =>
          <option key={state} value={state}>{state}</option>
        )}
      </select>
      {field.meta.touched && field.meta.error &&
      <span>{field.meta.error}</span>}
  </div>
);

const DropDown = props =>
  <Field
    {...props}
    component={renderField}
  />;

DropDown.propTypes = {
  validate: array.isRequired,
  name: string.isRequired,
  label: string.isRequired
};

DropDown.defaultProps = {
  validate: {},
  name: "",
  label: ""
};

export default DropDown;
