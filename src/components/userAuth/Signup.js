import React from 'react';
import {Link, IndexLink} from 'react-router';

const Signup = () => {
  return (
    <div className="row">
      <h2 className="text-center">Sign Up</h2>
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
            <p className="text-center">By signin up, yopu agree to the <Link to="#">Terms of Service</Link></p>
          </div>
        </div>
        <div className="row">
          <div className="large-6 large-centered medium-6 columns">
            <p className="text-center">Already have an account? <Link to="/login">Log In</Link></p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Signup;
