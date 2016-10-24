import React from "react";
import { Route, IndexRoute } from "react-router";
import App from "../components/App";
import UserLogin from "../containers/UserLogin";
import UserSignup from "../containers/UserSignup";

export default (
  <Route
      component={App}
      path="/"
  >
    <IndexRoute component={UserLogin} />
    <Route
        component={UserSignup}
        path="/registrations/new"
    />
    <Route
        component={UserLogin}
        path="*"
        status={404}
    />
  </Route>
);
