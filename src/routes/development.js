// import UserSignup from "../containers/UserSignup";
import { Route, IndexRoute } from "react-router";
import App from "../components/App";
import Environment from "../containers/Environment";
import Profile from "../components/user/Profile";
import ProjectInfo from "../containers/ProjectInfo";
import Projects from "../containers/Projects";
import ProjectUsers from "../containers/ProjectUsers";
import ProvisionerForm from "../containers/ProvisionerForm";
import React from "react";
import ServiceOAuth from "../containers/ServiceOAuth";
import UserLogin from "../containers/UserLogin";
import UserProfile from "../containers/UserProfile";
import UserSubscription from "../containers/UserSubscription";

export default (
  <Route
      component={App}
      path="/"
  >
    <IndexRoute component={ProvisionerForm} />
    <Route
        component={UserProfile}
        path="user"
    >
      <IndexRoute component={Profile} />
    </Route>
    <Route
        component={UserSubscription}
        path="/user/subscription"
    />
    <Route
        component={UserLogin}
        path="login"
    />
    <Route
        component={ServiceOAuth}
        path="/oauth/:serviceName"
    />
    <Route
        component={Environment}
        path="environment"
    />
    <Route
        component={ProjectUsers}
        path="users"
    />
    <Route
        component={ProjectInfo}
        path="project/:projecId"
    />
    <Route
        component={Projects}
        path="projects"
    />
    <Route
        component={ProvisionerForm}
        path="*"
        status={404}
    />
    {/* <Route
        component={UserSignup}
        path="/registrations/new"
    /> */}
  </Route>
);
