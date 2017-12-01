import React from "react";
import { Field, reduxForm, focus } from "redux-form";
import { registerUser } from "../../actions/users";
import { login } from "../../actions/auth";
import { connect } from "react-redux";
import Input from "../Input/input";
import { required, nonEmpty, matches, length, isTrimmed } from "../../validators";
import "./registration-form.css";

class RegistrationForm extends React.Component {
  onSubmit(values) {
    const { username, password, firstName, lastName } = values;
    const user = { username, password, firstName, lastName };
    return this.props.dispatch(registerUser(user)).then(() => this.props.dispatch(login(username, password)));
  }

  // on component did mount dispatch an action to update state from is a registery page
  render() {
    return (
      <div className="register-form-container">
        <form className="register-form" onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
          <div className="register-form-input">
            <label htmlFor="firstName" className="register-form-label">
              First name
            </label>
            <Field component={Input} type="text" name="firstName" />
          </div>
          <div className="register-form-input">
            <label htmlFor="lastName" className="register-form-label">
              Last name
            </label>
            <Field component={Input} type="text" name="lastName" />
          </div>
          <div className="register-form-input">
            <label htmlFor="username" className="register-form-label">
              Username
            </label>
            <Field component={Input} type="text" name="username" validate={[required, nonEmpty, isTrimmed]} />
          </div>
          <div className="register-form-input">
            <label htmlFor="password" className="register-form-label">
              Password
            </label>
            <Field
              component={Input}
              type="password"
              name="password"
              validate={[required, length({ min: 7, max: 72 }), isTrimmed]}
            />
          </div>
          <div className="register-form-input">
            <label htmlFor="passwordConfirm" className="register-form-label">
              Confirm password
            </label>
            <Field
              component={Input}
              type="password"
              name="passwordConfirm"
              validate={[required, nonEmpty, matches("password")]}
            />
          </div>
          <div className="register-form-submit">
            <button
              type="submit"
              className="register-form-submit-btn"
              disabled={this.props.pristine || this.props.submmitting}
            >
              Register
            </button>
          </div>
        </form>
      </div>
    );
  }
}

const Register = reduxForm({
  form: "registration",
  onSubmitFail: (errors, dispatch) => dispatch(focus("registration", Object.keys(errors)[0]))
})(RegistrationForm);

export default connect()(Register);
