import { Provider } from "react-redux";
import { Router } from "react-router";
import React, { Component, PropTypes } from "react";
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
