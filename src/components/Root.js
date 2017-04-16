import { Provider } from "react-redux";
import { Router } from "react-router";
import PropTypes from "prop-types";
import React, { Component } from "react";
import routes from "../routes";

export default class Root extends Component {
  render() {
    const { store, history, logPageView } = this.props;
    return (
      <Provider store={store}>
        <Router
            history={history}
            onUpdate={logPageView}
            routes={routes}
        />
      </Provider>
    );
  }
}

Root.propTypes = {
  history: PropTypes.object.isRequired,
  logPageView: PropTypes.func.isRequired,
  store: PropTypes.object.isRequired
};
