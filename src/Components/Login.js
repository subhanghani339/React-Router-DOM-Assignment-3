import React from "react";
import { Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Login = () => {
  return (
    <div className="login-form">
      <form>
        <div className="email-div">
          <label className="email">EMAIL</label>
          <input type="email" placeholder="example@gmail.com" />
        </div>
        <div className="password-div">
          <label className="password">PASSWORD</label>
          <input type="password" placeholder="***********" />
        </div>

        <div className="signin-button">
        <NavLink to="/home" >
          <Button type="submit" variant="primary" className="w-25">
            Sign in
          </Button>
        </NavLink>
        </div>
      </form>
    </div>
  );
};

export default Login;
