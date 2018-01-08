/**
 * Created by emols on 12/6/2017.
 */
import React from 'react';
import {string, object, array} from 'prop-types';
import {Field} from 'redux-form';

// const renderField = ({input, label, type, meta: {touched, error, warning}}) => (
//     <div>
//       <label>{label}: </label>
//       <input {...input} placeholder={label} type={type}/>
//       {touched &&
//       ((error && <span>{error}</span>) ||
//       (warning && <span>{warning}</span>))}
//     </div>
// );

const RadioButton = props => {
  const {validate, label, valueList, name, onChange} = props;

  return (
    <div>
      <label>{label}</label>
      {valueList.map(value =>
        <span>
          {' '}
          <Field
            key={new Date()}
            name={name}
            value={value}
            component="input"
            type="radio"
            validate={validate}
            onChange={onChange}
          />
          {' '}
          <label>{value}</label>
        </span>
      )}
    </div>
  );
};


RadioButton.propTypes = {
  validate: array,
  name: string.isRequired,
  label: string.isRequired,
  value: string.isRequired
};

RadioButton.defaultProps = {
  validate: {},
  name: "",
  label: "",
  value: ""
};

export default RadioButton;
