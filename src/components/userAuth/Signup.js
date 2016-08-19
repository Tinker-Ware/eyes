import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { fromJS } from 'immutable';
import { push } from 'react-router-redux';

const Signup = ( { requestPostUser, setUserSesionEmail, setUserSesionPassword, userAppState } ) => {
  const handleUserSignup = (e) => {
    e.preventDefault();
    !userAppState.get('user_sesion') ? 
      requestPostUser(fromJS({
        "user_signup": {
          "email": userAppState.get('user_sesion_email'),
          "password": userAppState.get('user_sesion_password')
        }
      })) : '';
  };
  
  const handleUserSesionEmail = (e) => {
    e.preventDefault();
    setUserSesionEmail(fromJS({
      "user_sesion_email": e.target.value
    }));
  };
  const handleUserSesionPassword = (e) => {
    e.preventDefault();
    setUserSesionPassword(fromJS({
      "user_sesion_password": e.target.value
    }));
  };
  return (
    <div className="row">
      <h2 className="text-center">Sign Up</h2>
      <form onSubmit={handleUserSignup}>
        <div className="row">
          <div className="large-6 large-centered medium-6 columns">
            <input type="text" value={userAppState.get('user_sesion_email')?userAppState.get('user_sesion_email'):''} name="Email Address" onChange={handleUserSesionEmail} placeholder="Email Address" />
          </div>
        </div>
        <div className="row">
          <div className="large-6 large-centered medium-6 columns">
            <input type="password" value={userAppState.get('user_sesion_password')?userAppState.get('user_sesion_password'):''} name="Password" onChange={handleUserSesionPassword} placeholder="Password" />
          </div>
        </div>
        <div className="row">
          <div className="large-6 large-centered medium-6 columns">
            <input type="submit" name="Submit" className="success button expanded" value="Submit" />
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

Signup.propTypes = {
  requestPostUser: PropTypes.func.isRequired,
  setUserSesionEmail: PropTypes.func.isRequired,
  setUserSesionPassword: PropTypes.func.isRequired,
  userAppState: PropTypes.object.isRequired
};

export default Signup;