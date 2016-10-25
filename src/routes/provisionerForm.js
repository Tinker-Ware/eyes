import React from "react";
import { Route, IndexRoute } from "react-router";
import App from "../components/App";
import ProvisionerForm from "../containers/ProvisionerForm";

export default (
  <Route
      component={App}
      path="/"
  >
    <IndexRoute component={ProvisionerForm} />
    <Route
        component={ProvisionerForm}
        path="*"
        status={404}
    />
  </Route>
);
