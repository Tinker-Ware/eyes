import React from "react";
import { Route } from "react-router";
import App from "../components/App";
import ServiceOAuth from "../containers/ServiceOAuth";

export default (
  <Route
    component={App}
    path="/">
    <Route
      component={ServiceOAuth}
      path="/oauth/:serviceName"
    />
  </Route>
);
