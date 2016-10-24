import React, { PropTypes } from "react";
import { Link } from "react-router";
import { fromJS } from "immutable";

const Login = ( { requestGetUserSesion, setUserSesionEmail, setUserSesionPassword, userAppState } ) => {
  const handleUserSesion = (e) => {
    e.preventDefault();
    !userAppState.get("user_session")?
      requestGetUserSesion(fromJS({
        "user_session": {
          "email": userAppState.get("user_sesion_email"),
          "password": userAppState.get("user_sesion_password")
        }
      })) :"";
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
      <h2 className="text-center">Log In</h2>
      <form onSubmit={handleUserSesion}>
        <div className="row">
          <div className="large-6 large-centered medium-6 columns">
            <input
                name="Email Address"
                onChange={handleUserSesionEmail}
                placeholder="Email Address"
                type="text"
                value={userAppState.get("user_sesion_email")?userAppState.get("user_sesion_email"):""}
            />
          </div>
        </div>
        <div className="row">
          <div className="large-6 large-centered medium-6 columns">
            <input
                name="Password"
                onChange={handleUserSesionPassword}
                placeholder="Password"
                type="password"
                value={userAppState.get("user_sesion_password")?userAppState.get("user_sesion_password"):""}
            />
          </div>
        </div>
        <div className="row">
          <div className="large-6 large-centered medium-6 columns">
            <input
                className="success button expanded"
                name="Submit"
                type="submit"
                value="Submit"
            />
          </div>
        </div>
        <div className="row">
          <div className="large-6 large-centered medium-6 columns">
            <p className="text-center"><Link to="#">Forgot password?</Link></p>
          </div>
        </div>
        <div className="row">
          <div className="large-6 large-centered medium-6 columns">
            <p className="text-center">Do not have an account? <Link to="/registrations/new">Sign Up</Link></p>
          </div>
        </div>
      </form>
    </div>
  );
};

Login.propTypes = {
  requestGetUserSesion: PropTypes.func.isRequired,
  setUserSesionEmail: PropTypes.func.isRequired,
  setUserSesionPassword: PropTypes.func.isRequired,
  userAppState: PropTypes.object.isRequired
};

export default Login;
