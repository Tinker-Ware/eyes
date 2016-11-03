/*eslint-disable import/default*/

import React from "react";
import {render} from "react-dom";
import { Provider } from "react-redux";
import { Router, browserHistory } from "react-router";
import routes from "../routes/development";
import configureStore from "../store/configureStore";
import { syncHistoryWithStore } from "react-router-redux";

import "../styles/foundation-grid.scss";
import "../styles/styles.scss";
// import"../icons/foundation-icons.css";
require("../favicon.ico");

const store = configureStore();

const injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store);

render(
  <Provider store={store}>
    <Router
        history={history}
        routes={routes}
    />
  </Provider>, document.getElementById("app")
);
