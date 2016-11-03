import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { browserHistory } from "react-router";
import { fromJS } from "immutable";
import cookie from "react-cookie";
import * as actions from "../actions/userActions";
import Login from "../components/userAuth/Login";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

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
        </div>
      </MuiThemeProvider>
    );
  }
}

UserLogin.propTypes = {
  actions: PropTypes.object.isRequired,
  userAppState: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    userAppState: state.userAppState
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserLogin);
