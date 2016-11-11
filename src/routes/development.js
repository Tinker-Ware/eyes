import React from "react";
import { Route, IndexRoute } from "react-router";
import App from "../components/App";
import Profile from "../components/user/Profile";
import ProvisionerForm from "../containers/ProvisionerForm";
import ProjectInfo from "../containers/ProjectInfo";
import ProjectUsers from "../containers/ProjectUsers";
import Projects from "../containers/Projects";
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
    <Route
        component={ServiceOAuth}
        path="/oauth/:serviceName"
    />
    <Route
        component={ProjectUsers}
        path="users"
    />
    <Route
        component={ProjectInfo}
        path="project"
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
