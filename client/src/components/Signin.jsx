import React from 'react'
import SigninImg from '../Images/social-feed-colour.svg'

const Signin = () => {
    return (
        <div className="container">
          <div className="row">
            <div className="col s12 m6">
              <img src={SigninImg} alt="signup" />
            </div>
            <div className="col s12 m6">
              <h3 className="center-align">Signin</h3>
              <form>
                <div className="row signup">
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
                    <button className='waves-effect waves-light btn'>Signin</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      );
}

export default Signin
