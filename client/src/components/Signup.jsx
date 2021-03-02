import React from "react";
import SignupImg from "../Images/unlock.svg";

const Signup = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col s12 m6">
          <img src={SignupImg} alt="signup" />
        </div>
        <div className="col s12 m6">
          <h3 className="center-align">Signup</h3>
          <form>
            <div className="row signup">
              <div className="input-field col m12">
                <input
                  placeholder="enter your name"
                  name="name"
                  type="text"
                  className="validate"
                />
                <label for="name" className="active">
                  First Name
                </label>
              </div>
              <div className="input-field col m12">
                <input
                  placeholder="enter your email"
                  name="email"
                  type="email"
                  className="validate"
                />
                <label for="email" className="active">
                  Email
                </label>
              </div>
              <div className="input-field col m12">
                <input
                  placeholder="enter your password"
                  name="password"
                  type="password"
                  className="validate"
                />
                <label for="password" className="active">
                  Password
                </label>
              </div>
              <div className="input-field col m12">
                <button className='waves-effect waves-light btn'>Signup</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
