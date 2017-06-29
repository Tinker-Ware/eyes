import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actions from "../actions/userActions";
import * as applicationActions from "../actions/ApplicationActions";
import cookie from "react-cookie";
import PropTypes from "prop-types";
import React, { Component } from "react";

export class ServiceOAuth extends Component {
  componentWillMount() {
    const search = location.search;
    const result = search.substring(1)
      .split("&")
      .map(i => i.split("="))
      .reduce((prev, curr) => {
        const next = { ...prev };
        next[curr[0]] = curr[1];
        return next;
      }, {});
    cookie.save(this.props.params.serviceName+"_oauth", result, { path:"/"});
    window.close();
  }
  render() {
    return (
      <div />
    );
  }
}

ServiceOAuth.propTypes = {
  actions: PropTypes.object.isRequired,
  applicationActions: PropTypes.object.isRequired,
  applicationAppState: PropTypes.object.isRequired,
  params: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    applicationAppState: state.applicationAppState
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
)(ServiceOAuth);
