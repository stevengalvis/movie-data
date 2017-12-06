import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import Register from "./registration-form";

export function RegistrationPage(props) {
  if (props.loggedIn) {
    return <Redirect to="/movie/24428" />;
  }

  return (
    <div className="register">
      <Register />
    </div>
  );
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(RegistrationPage);
