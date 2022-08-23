import React from "react";
import "../style/login.css";

const Login = () => {
  return (
    <div className="loginbox">
      <div className="logo"></div>
      <div className="title">travel | moire</div>
      <div className="caption">
        Exploring the world one destination at a time
      </div>

      <form>
        <div className="emailbox">
          <div className="emailpng" />
          <input
            className="email1"
            type="email"
            name="email"
            required
            placeholder="Email ID"
          ></input>
        </div>


        <div className="password">
          <div className="passwordpng" />
          <input
            className="pass"
            type="password"
            name="password"
            required
            placeholder="Password"
          ></input>
        </div>


        <div className="forgot">Forgot Password?</div>
        <div className="login">Log In</div>
        <div className="signup">Sign Up</div>
      </form>


      <div className="or">OR</div>
      <div className="socialicons">
        <div className="fb"></div>
        <div className="tw"></div>
        <div className="ig"></div>
        <div className="linkedin"></div>
      </div>
    </div>
  );
};

export default Login;