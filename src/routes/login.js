import React from "react";
import { Route, IndexRoute } from "react-router";
import App from "../components/App";
import UserLogin from "../containers/UserLogin";
import UserSignup from "../containers/UserSignup";

export default (
  <Route
    path="/"
    component={App}>
    <IndexRoute component={UserLogin} />
    <Route
      path="/registrations/new"
      component={UserSignup} />
    <Route status={404} path="*" component={UserLogin} />
  </Route>
);
