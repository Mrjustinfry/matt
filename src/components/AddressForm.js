import React, { Component } from 'react';
import {reduxForm, Field, focus, change, untouch, SubmissionError} from 'redux-form';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import Input from "./Input";

import "../style/AddressForm.css";

class AddressForm extends Component {
    constructor(props) {
        super(props);
        }
    render() {
        return ( 
            <div className="addressBox">
            <form className="addressForm">
              <Field
                  name="firstName"
                  type="text"
                  component={Input}
                  label="First Name"
                  display="adIn"
                   
                  ref={input => (this.firstName = input)}
              />
              <br />
              <Field
                  name="lastName"
                  type="text"
                  component={Input}
                  label="Last Name"
                  display="adIn"
                   
                  ref={input => (this.lastName = input)}
              />
              <br />
              <Field
                  name="addressOne"
                  type="text"
                  component={Input}
                  label="Address Line 1"
                  display="adIn"
                   
                  ref={input => (this.username = input)}
              />
              <br />
              <Field
                  name="addressTwo"
                  type="text"
                  component={Input}
                  label="Address Line 2"
                  display="adIn"
                  ref={input => (this.password = input)}
              />
              <br />
              <Field
                  name="city"
                  type="text"
                  component={Input}
                  label="City"
                  display="adIn"
              />
              <Field
                  name="state"
                  type="text"
                  component={Input}
                  label="State"
                  display="adIn"
              />
              <Field
                  name="zipcode"
                  type="text"
                  component={Input}
                  label="Zipcode / Postal Code"
                  display="adIn"
              />
              <br />
              <button
                    className="continueBtn"
                    type="submit"
                    disabled={this.props.pristine || this.props.submitting}>
                    Continue
                </button>
            </form>
          </div>
        )
    }
}

export default withRouter(reduxForm({
    form: 'address',
    onSubmitFail: (errors, dispatch) =>
        dispatch(focus('address', Object.keys(errors)[0]))
})(AddressForm));