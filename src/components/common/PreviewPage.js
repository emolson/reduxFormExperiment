/**
 * Created by n0235026 on 3/7/2018.
 */
import React, {Component} from 'react';
import {getFormValues} from 'redux-form';
import {connect} from "react-redux";


class PreviewPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <textarea
        readOnly={true}
        style={{width:'100%', height:'500px', marginTop:'30px'}}
        value={JSON.stringify(this.props, null, 2)}>
      </textarea>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    partyInfo: getFormValues('partyInfo')(state),
    userInfo: getFormValues('userInfo')(state)
  };
}

function mapDispatchToProps(dispatch) {
  return {
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PreviewPage);
