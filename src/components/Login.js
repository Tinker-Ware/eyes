import React from 'react';
import {Link, IndexLink} from 'react-router';
import AccountSidebar from "./user/AccountSidebar";
import UserSidebar from "./user/UserSidebar";

const Login = () => {
  return (
    <div className="row">
      <h2 className="text-center">Log In</h2>
      <form>
        <div className="row">
          <div className="large-6 large-centered medium-6 columns">
            <input type="text" placeholder="Email Address" />
          </div>
        </div>
        <div className="row">
          <div className="large-6 large-centered medium-6 columns">
            <input type="text" placeholder="Password" />
          </div>
        </div>
        <div className="row">
          <div className="large-6 large-centered medium-6 columns">
            <input type="submit" className="success button expanded" value="Submit" />
          </div>
        </div>
        <div className="row">
          <div className="large-6 large-centered medium-6 columns">
            <p className="text-center"><Link to="forgotpassword">Forgot password?</Link></p>
          </div>
        </div>
      </form>
      <div className="row">
        <div className="large-6 large-centered medium-6 columns">
          <p className="text-center">Do not have an account? <Link to="signup">Sign Up</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
