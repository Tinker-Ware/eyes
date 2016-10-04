import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import cookie from 'react-cookie';
import * as actions from '../actions/userActions';

export class ServiceOAuth extends Component {
  componentWillMount() {
    const search = location.search;
    const result = search.substring(1)
      .split('&')
      .map(i => i.split('='))
      .reduce((prev, curr) => {
        const next = { ...prev };
        next[curr[0]] = curr[1];
        return next;
      }, {});
    cookie.save(this.props.params.serviceName+'_oauth', result, { path: '/' });
    window.close();
  }
  render() {
    return (
      <div/>
    );
  }
}

ServiceOAuth.propTypes = {
  actions: PropTypes.object.isRequired,
  params: PropTypes.object.isRequired
};

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(
  mapDispatchToProps
)(ServiceOAuth);
