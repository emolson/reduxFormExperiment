/**
 * Created by emols on 5/25/2017.
 */
import React from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {formValueSelector} from 'redux-form';

import * as partyActions from "../../../actions/partyAction";
import PartyInfo from "../../common/PartyInfo";
import TaxInfo from "../../common/TaxInfo";

class CreateParty extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formBackground: ''
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.colorBasedOnPartyType = this.colorBasedOnPartyType.bind(this);
  }


  onSubmit(values) {
    console.log("I be the one handling the submit: " + values);
  }

  colorBasedOnPartyType() {
    console.log(this.props.partyType);
    if (this.props.partyType === 'Birthday') {
      return require("../../../styles/backgrounds/birthdayBackground.jpg");
    } else if (this.props.partyType === 'Sports') {
      return require("../../../styles/backgrounds/sportsBackground.jpg");
    } else if (this.props.partyType === 'Rager') {
      return require("../../../styles/backgrounds/ragerBackground.jpg");
    }
  }

  render() {
    let page = '';
    switch (this.props.match.params.page) {
      case "partyInfo":
        page = (
            <PartyInfo
            onSubmit={this.onSubmit}
          />
      );
      break;
      case "guestInfo":
      page = (
        <div>
          <h1>TaxInfo:</h1>
          <TaxInfo
            initialValues={{
              addressType: 'Business'
            }}
            onSubmit={this.onSubmit}
            enableReinitialize
          />
        </div>
      );
      break;
      }


      return (
        <div className="container">
          <div className="row">
            <div className="col-sm-2">
              <div className="alert alert-secondary" role="alert">
                This is a secondary alert—check it out!
              </div>
            </div>
            <div className="col-sm-2">
              <div className="alert alert-success" role="alert">
                This is a success alert—check it out!
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <h1>Party:</h1>
            {page}
          </div>
          <div className="col-sm-6"  style={{height: '100px', backgroundImage: 'url('+this.colorBasedOnPartyType()+')'}}>
            party here:
          </div>
        </div>
      );
      }
      }

      const selector = formValueSelector('partyInfo');

      function mapStateToProps(state, ownProps) {
        // What is returned will show up in props, state is the redux state
        return {
        party: state.form.partyInfo,
        partyType: selector(state, 'partyType')
      };
      }

      function mapDispatchToProps(dispatch) {
        return {
        actions: bindActionCreators(Object.assign({}, partyActions), dispatch)
      };
      }

      export default connect(
      mapStateToProps,
      mapDispatchToProps
      )(CreateParty);
