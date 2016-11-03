import React, { PropTypes } from "react";
// import { Link } from "react-router";
import { fromJS } from "immutable";
import { Card } from "material-ui/Card";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";

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
    <div className="login-card">
      <Card>
        <h2 className="text-center">
          {"Log In"}
        </h2>
        <form>
              <TextField
                  floatingLabelText="Email Address"
                  fullWidth
                  hintText="correo@empresa.com"
                  name="Email Address"
                  onChange={handleUserSesionEmail}
                  type="text"
                  value={userAppState.get("user_sesion_email")?userAppState.get("user_sesion_email"):""}
              />
              <TextField
                  floatingLabelText="Password"
                  fullWidth
                  hintText="password"
                  name="Password"
                  onChange={handleUserSesionPassword}
                  type="text"
                  value={userAppState.get("user_sesion_password")?userAppState.get("user_sesion_password"):""}
              />
              <RaisedButton
                  className="btn-login"
                  fullWidth
                  label="Login"
                  onClick={handleUserSesion}
                  primary
              />
          {/* <div className="row">
            <div className="large-6 large-centered medium-6 columns">
              <p className="text-center">
                <Link to="#">
                  {"Forgot password?"}
                </Link>
              </p>
            </div>
          </div>
          <div className="row">
            <div className="large-6 large-centered medium-6 columns">
              <p className="text-center">
                {"Do not have an account?"}
                <Link to="/registrations/new">
                  &nbsp;{"Sign Up"}
                </Link>
              </p>
            </div>
          </div> */}
        </form>
      </Card>
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
