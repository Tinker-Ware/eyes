import { bindActionCreators } from "redux";
import { browserHistory } from "react-router";
import { connect } from "react-redux";
import { fromJS } from "immutable";
import * as actions from "../actions/userActions";
import * as applicationActions from "../actions/ApplicationActions";
import cookie from "react-cookie";
import Login from "../components/userAuth/Login";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Notification from "../components/Notification";
import React, { Component, PropTypes } from "react";

export class UserLogin extends Component {
  componentWillMount() {
    if (cookie.load("user_session"))
      browserHistory.push("/");
  }
  componentDidUpdate() {
    if (this.props.userAppState.get("user_session")) {
      this.props.actions.setUserSesionEmail(fromJS({
        "user_sesion_email":""}));
      this.props.actions.setUserSesionPassword(fromJS({
        "user_sesion_password":""}));
      browserHistory.push("/");
    }
  }
  render() {
    return (
      <MuiThemeProvider>
        <div className="small-12 medium-12 large-6 large-centered columns">
          <Login
              requestGetUserSesion={this.props.actions.requestGetUserSesion}
              setUserSesionEmail={this.props.actions.setUserSesionEmail}
              setUserSesionPassword={this.props.actions.setUserSesionPassword}
              userAppState={this.props.userAppState}
          />
          <Notification
              message={this.props.applicationAppState.get("notification")}
              setNotification={this.props.applicationActions.setNotification}
          />
        </div>
      </MuiThemeProvider>
    );
  }
}

UserLogin.propTypes = {
  actions: PropTypes.object.isRequired,
  applicationActions: PropTypes.object.isRequired,
  applicationAppState: PropTypes.object.isRequired,
  userAppState: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    applicationAppState: state.applicationAppState,
    userAppState: state.userAppState
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch),
    applicationActions: bindActionCreators(applicationActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserLogin);
