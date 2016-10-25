import React from "react";
import { Route, IndexRoute } from "react-router";
import Profile from "../components/user/Profile";
import UserProfile from "../containers/UserProfile";

export default (
  <Route
      component={UserProfile}
      path="/"
  >
    <IndexRoute component={Profile} />
    <Route
        component={Profile}
        path="*"
        status={404}
    />
  </Route>
);
