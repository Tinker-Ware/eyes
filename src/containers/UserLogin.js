import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { browserHistory } from 'react-router';
import { fromJS } from 'immutable';
import * as actions from '../actions/userActions';
import Login from "../components/userAuth/Login";

export class UserLogin extends Component {
  componentWillMount() {
    if (this.props.userAppState.get('user_sesion'))
      browserHistory.push('/');
  }
  componentDidUpdate() {
    if (this.props.userAppState.get('user_sesion')) {
      this.props.actions.setUserSesionEmail(fromJS({
        "user_sesion_email": ''
      }));
      this.props.actions.setUserSesionPassword(fromJS({
        "user_sesion_password": ''
      }));
      browserHistory.push('/');
    }
  }
  render() {
    return (
      <div className="row">
        <Login
          requestGetUserSesion={this.props.actions.requestGetUserSesion}
          setUserSesionEmail={this.props.actions.setUserSesionEmail}
          setUserSesionPassword={this.props.actions.setUserSesionPassword}
          userAppState={this.props.userAppState} />
      </div>
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