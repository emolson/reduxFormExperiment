/**
 * Created by n0235026 on 3/7/2018.
 */
import React from 'react';
import {string, bool, func} from 'prop-types';

const ButtonSet = props => {
  const {pristine, reset, submitting, clear, submit} = props;
  return (
    <div style={{marginTop: '20px'}}>
      <div className="row">
        <button className="col-xs-4 btn btn-danger" type="button" disabled={pristine || submitting} onClick={reset}>
          {clear}
        </button>
        <button className="col-xs-4 btn btn-primary" type="submit" disabled={submitting} style={{marginLeft: '10px'}}>
          {submit}
        </button>
      </div>
    </div>
  );
};

ButtonSet.propTypes = {
  pristine: bool.isRequired,
  reset: func.isRequired,
  submit: string.isRequired,
  clear: string.isRequired,
  submitting: bool.isRequired
};



export default ButtonSet;
