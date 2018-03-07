/**
 * Created by emols on 12/6/2017.
 */
import React from 'react';
import {string, object, array} from 'prop-types';
import {MuiThemeProvider} from 'material-ui/styles';
import {Field} from 'redux-form';
import TextField from 'material-ui/TextField';
import {inputTheme} from '../../styles/materialUIThemes';

const renderField = ({input, label, meta: {touched, error}}) => (
  <div style={{marginTop:'15px'}}>
    <MuiThemeProvider theme={inputTheme()}>
      <TextField
        label={label}
        error={(touched && error) ? true : false}
        {...input}
      />
    </MuiThemeProvider>
    {(touched && error) && <span>{error}</span>}
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
  label: string.isRequired
};

Input.defaultProps = {
  validate: {},
  name: "",
  label: ""
};

export default Input;
