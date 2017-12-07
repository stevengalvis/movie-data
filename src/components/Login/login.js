import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import LoginForm from "./login-form";

export function Login(props) {
  if (props.loggedIn) {
    return <Redirect to="/movie/24428" />;
  }

  return (
    <div className="login">
      <LoginForm />
    </div>
  );
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(Login);
