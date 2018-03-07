/**
 * Created by emols on 12/6/2017.
 */
import React from 'react';
import {Field} from 'redux-form';
import {InputLabel} from 'material-ui/Input';
import {MenuItem} from 'material-ui/Menu';
import {FormControl} from 'material-ui/Form';
import {MuiThemeProvider} from 'material-ui/styles';
import Select from 'material-ui/Select';
import {inputTheme} from '../../styles/materialUIThemes';


const renderField = ({input, label, meta: {touched, error}, options}) => (
  <div style={{marginTop:'15px'}}>
    <MuiThemeProvider theme={inputTheme()}>
      <FormControl
        style={{display: 'flex', flexWrap: 'wrap'}}
        error={(touched && error) ? true : false}
      >
        <InputLabel htmlFor="age-simple">{label}</InputLabel>
        <Select
          value={input.value}
          inputProps={input}
          onChange={(event, index, value) => input.onChange(value)}
          children={selectChildren(options)}
        >
        </Select>
      </FormControl>
    </MuiThemeProvider>
    {(touched && error) && <span>{error}</span>}
  </div>
);

const DropDownField = props => (
  <Field
    {...props}
    component={renderField}
  />
)

const selectChildren = options => {
  let children = [];
  children.push(<MenuItem key="" value=""></MenuItem>);
  options.map(option => {
    children.push(<MenuItem key={option} value={option}>{option}</MenuItem>);
  });
  return children;
};


export default DropDownField;
