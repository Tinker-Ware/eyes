import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../actions/userActions";
import AccountSidebar from "../components/user/AccountSidebar";
import UserSidebar from "../components/user/UserSidebar";

export class UserProfile extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="row">
        <div className="large-3 columns">
          <AccountSidebar />
          <UserSidebar />
        </div>
        <div className="large-9 columns">
          {this.props.children}
        </div>
      </div>
    );
  }
}

UserProfile.propTypes = {
  actions: PropTypes.object.isRequired,
  children: PropTypes.object.isRequired,
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
)(UserProfile);
