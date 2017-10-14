import React from "react";

const Login = () => (
  <form
    onSubmit={e => {
      e.preventDefault();
    }}
  >
    <label htmlFor="user-name">Username</label>
    <input type="text" name="user-name" />
    <label htmlFor="password">Password</label>
    <input type="text" name="password" />
    <button>Login</button>
  </form>
);

export default Login;
