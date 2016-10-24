import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from '../components/App';
import ServiceOAuth from '../containers/ServiceOAuth';

export default (
  <Route
    path="/"
    component={App}>
    <Route
      path="/oauth/:serviceName"
      component={ServiceOAuth} />
  </Route>
);
