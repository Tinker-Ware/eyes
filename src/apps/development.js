/*eslint-disable import/default*/

import { Provider } from "react-redux";
import { Router, browserHistory } from "react-router";
import { syncHistoryWithStore } from "react-router-redux";
import {render} from "react-dom";
import configureStore from "../store/configureStore";
import React from "react";
import ReactGA from "react-ga";
import routes from "../routes/development";

require("../styles/foundation-grid.scss");
require("../styles/styles.scss");

ReactGA.initialize("UA-92305954-1");

const store = configureStore();

function logPageView() {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
}

const injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store);

render(
  <Provider store={store}>
    <Router
        history={history}
        onUpdate={logPageView}
        routes={routes}
    />
  </Provider>, document.getElementById("app")
);
