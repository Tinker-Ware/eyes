import React from "react";
import { Route, IndexRoute } from "react-router";
import App from "../components/App";
import Profile from "../components/user/Profile";
import ProvisionerForm from "../containers/ProvisionerForm";
import UserProfile from "../containers/UserProfile";
import UserLogin from "../containers/UserLogin";
import UserSignup from "../containers/UserSignup";
import ServiceOAuth from "../containers/ServiceOAuth";

export default (
  <Route
    path="/"
    component={App}>
    <IndexRoute component={ProvisionerForm} />
    <Route
      path="/user"
      component={UserProfile}>
      <IndexRoute component={Profile} />
    </Route>
    <Route
      path="login"
      component={UserLogin} />
    <Route
      path="/registrations/new"
      component={UserSignup} />
    <Route
      path="/oauth/:serviceName"
      component={ServiceOAuth} />
    <Route status={404} path="*" component={ProvisionerForm} />
  </Route>
);
