import React from "react";
import { Route, IndexRoute } from "react-router";
import App from "../components/App";
import Profile from "../components/user/Profile";
import ProvisionerForm from "../containers/ProvisionerForm";
import UserProfile from "../containers/UserProfile";
import UserLogin from "../containers/UserLogin";
// import UserSignup from "../containers/UserSignup";
import ServiceOAuth from "../containers/ServiceOAuth";

export default (
  <Route
      component={App}
      path="/"
  >
    <IndexRoute component={ProvisionerForm} />
    <Route
        component={UserProfile}
        path="/user"
    >
      <IndexRoute component={Profile} />
    </Route>
    <Route
        component={UserLogin}
        path="login"
    />
    {/* <Route
        component={UserSignup}
        path="/registrations/new"
    /> */}
    <Route
        component={ServiceOAuth}
        path="/oauth/:serviceName"
    />
    <Route
        component={ProvisionerForm}
        path="*"
        status={404}
    />
  </Route>
);
