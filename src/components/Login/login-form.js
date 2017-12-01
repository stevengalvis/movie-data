import React from "react";
import { Field, reduxForm, focus } from "redux-form";
import Input from "../Input/input";
import { login } from "../../actions/auth";
import { required, nonEmpty } from "../../validators";
import "./login-form.css";

export class LoginForm extends React.Component {
  onSubmit(values) {
    return this.props.dispatch(login(values.username, values.password));
  }

  render() {
    let error;
    if (this.props.error) {
      error = (
        <div className="form-error" aria-live="polite">
          {this.props.error}
        </div>
      );
    }
    return (
      <div className="login-form-container">
        <form className="login-form" onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
          {error}
          <div className="login-form-field-container">
            <label htmlFor="username" className="login-form-label">
              Username
            </label>
            <Field component={Input} type="text" name="username" id="username" validate={[required, nonEmpty]} />
          </div>
          <div className="login-form-field-container">
            <label htmlFor="password" className="login-form-label">
              Password
            </label>
            <Field component={Input} type="password" name="password" id="password" validate={[required, nonEmpty]} />
          </div>
          <div className="login-form-btn-container">
            <button className="login-form-btn" disabled={this.props.pristine || this.props.submitting}>
              Log in
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: "login",
  onSubmitFail: (errors, dispatch) => dispatch(focus("login", "username"))
})(LoginForm);
