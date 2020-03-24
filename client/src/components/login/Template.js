import React from "react";
import Login from "./Login";
import "./login.css";
import logo from "../../assets/faceboom(2).png";

const SignInSide = ({ history }) => {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="center">
          <div className="title-wrapper">
            <img className="logo" src={logo} alt="" />
          </div>
          <hr />
          <div className="text-wrapper">
            <span className="text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit delinti
              consequuntur nihil.
            </span>
            <form className="form" noValidate>
              <Login history={history} />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInSide;
