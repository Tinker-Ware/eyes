import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { browserHistory } from "react-router";
import { fromJS } from "immutable";
import cookie from "react-cookie";
import * as actions from "../actions/userActions";
import * as applicationActions from "../actions/ApplicationActions";
import Login from "../components/userAuth/Login";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Snackbar from 'material-ui/Snackbar';

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
    const handleNotificationClose = () => {
      this.props.applicationActions.setNotification(fromJS({
        "notifications":""}));
    };
    return (
      <MuiThemeProvider>
        <div className="small-12 medium-12 large-6 large-centered columns">
          <Login
              requestGetUserSesion={this.props.actions.requestGetUserSesion}
              setUserSesionEmail={this.props.actions.setUserSesionEmail}
              setUserSesionPassword={this.props.actions.setUserSesionPassword}
              userAppState={this.props.userAppState}
          />
          <Snackbar
            onRequestClose={handleNotificationClose}
            autoHideDuration={3000}
            message={this.props.applicationAppState.get("notification")?this.props.applicationAppState.get("notification"):""}
            open={this.props.applicationAppState.get("notification")?true:false}
          />
        </div>
      </MuiThemeProvider>
    );
  }
}

UserLogin.propTypes = {
  actions: PropTypes.object.isRequired,
  applicationAppState: PropTypes.object.isRequired,
  applicationActions: PropTypes.object.isRequired,
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
