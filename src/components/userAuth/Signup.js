import { fromJS } from "immutable";
import { Link } from "react-router";
import { Card } from "material-ui/Card";
import PropTypes from "prop-types";
import React from "react";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";

const Signup = ( { requestPostUser, setUserSesionEmail, setUserSesionPassword, userAppState } ) => {
  const handleUserSignup = (e) => {
    e.preventDefault();
    !userAppState.get("user_session")?
      requestPostUser(fromJS({
        "user_signup": {
          "email": userAppState.get("user_sesion_email"),
          "password": userAppState.get("user_sesion_password"),
          "typeId": 1
        }
      })) :"";
  };
  const handleKeyPress = (e) => {
    if(e.key == "Enter"){
      !userAppState.get("user_session")?
        requestPostUser(fromJS({
          "user_session": {
            "email": userAppState.get("user_sesion_email"),
            "password": userAppState.get("user_sesion_password"),
            "typeId": 1
          }
        })) :"";
    }
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
    <div>
      <div className="video-container">
        <video
            autoPlay
            loop
            muted
            playsInline
            poster={require("../../img/ROCKET-IN-SKY.jpg")}
        >
          <source
              src={require("../../video/ROCKET-IN-SKY.mp4")}
              type="video/mp4"
          />{"Your browser does not support the video tag. I suggest you upgrade your browser."}
          <source
              src={require("../../video/ROCKET-IN-SKY.webm")}
              type="video/webm"
          />{"Your browser does not support the video tag. I suggest you upgrade your browser."}
        </video>
      </div>
      <div className="card">
        <div className="align-center">
          <span className="icon icon-logo logo-login">
            <span className="path1" />
            <span className="path2" />
            <span className="path3" />
            <span className="path4" />
            <span className="path5" />
            <span className="path6" />
            <span className="path7" />
          </span>
        </div>
        <Card>
          <h2 className="align-center color-primary">
            {"Sign Up to My DevOp"}
          </h2>
          <form>
                <TextField
                    errorText={userAppState.get("user_sesion_email")?"":"Email field is required."}
                    floatingLabelText="Email Address"
                    fullWidth
                    hintText="correo@empresa.com"
                    name="Email Address"
                    onChange={handleUserSesionEmail}
                    onKeyPress={handleKeyPress}
                    type="text"
                    value={userAppState.get("user_sesion_email")?userAppState.get("user_sesion_email"):""}
                />
                <TextField
                    errorText={userAppState.get("user_sesion_password")?"":"Password field is required."}
                    floatingLabelText="Password"
                    fullWidth
                    hintText="password"
                    name="Password"
                    onChange={handleUserSesionPassword}
                    onKeyPress={handleKeyPress}
                    type="password"
                    value={userAppState.get("user_sesion_password")?userAppState.get("user_sesion_password"):""}
                />
                <RaisedButton
                    className="btn-login"
                    fullWidth
                    label="Sign Up"
                    onClick={handleUserSignup}
                    primary
                />
            {/* <div className="row">
              <div className="large-6 large-centered medium-6 columns">
                <p className="align-center">
                  {"By signin up, you agree to the"}
                  <Link to="#">
                    {"Terms of Service"}
                  </Link>
                </p>
              </div>
            </div>
            <div className="row">
              <div className="large-6 large-centered medium-6 columns">
                <p className="align-center">
                  {"Already have an account?"}
                  <Link to="/login">
                    &nbsp;{"Sign Up"}
                  </Link>
                </p>
              </div>
            </div> */}
          </form>
        </Card>
      </div>
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
