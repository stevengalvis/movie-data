import React from "react";

const SignUpForm = () => (
  <form
    onSubmit={e => {
      e.preventDefault();
    }}
  >
    <label htmlFor="name"> First Name</label>
    <input type="text" name="first-name" />
    <label htmlFor="last-name">Last Name</label>
    <input type="text" name="last-name" />
    <label htmlFor="username">Username</label>
    <input type="text" name="user-name" />
    <label htmlFor="password">password</label>
    <input type="password" name="password" />
    <label htmlFor="confirm-password">Confirm Password</label>
    <input type="password" name="confirm-password" />
    <button type="submit">Submit</button>
  </form>
);

export default SignUpForm;
