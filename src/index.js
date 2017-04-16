/*eslint-disable import/default*/

import { AppContainer } from "react-hot-loader";
import { render } from "react-dom";
import { browserHistory } from "react-router";
import { syncHistoryWithStore } from "react-router-redux";
import configureStore from "./store/configureStore";
import React from "react";
import ReactGA from "react-ga";
import Root from "./components/Root";

require("./styles/foundation-grid.scss");
require("./styles/styles.scss");
require("./favicon.ico");

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
  <AppContainer>
    <Root
        history={history}
        logPageView={logPageView}
        store={store}
    />
  </AppContainer>,
  document.getElementById("app")
);

if (module.hot) {
  module.hot.accept("./components/Root", () => {
    const NewRoot = require("./components/Root").default;
    render(
      <AppContainer>
        <NewRoot
            history={history}
            logPageView={logPageView}
            store={store}
        />
      </AppContainer>,
      document.getElementById("app")
    );
  });
}
