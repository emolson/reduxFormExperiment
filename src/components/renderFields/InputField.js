/**
 * Created by emols on 12/6/2017.
 */
import React from 'react';
import {string, object, array} from 'prop-types';
import {Field} from 'redux-form';

const renderField = ({
  input,
  label,
  type,
  meta: {touched, error, warning}
}) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type}/>
      {touched &&
      ((error && <span>{error}</span>) ||
      (warning && <span>{warning}</span>))}
    </div>
  </div>
);

const Input = props =>
  <Field
    {...props}
    component={renderField}
  />

Input.propTypes = {
  validate: array.isRequired,
  name: string.isRequired,
  label: string.isRequired,
  type: string.isRequired
};

Input.defaultProps = {
  validate: {},
  name: "",
  label: "",
  type: 'text'
};

export default Input;
