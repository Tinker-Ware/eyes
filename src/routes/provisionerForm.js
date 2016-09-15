import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from '../components/App';
import Profile from '../components/user/Profile';
import ProvisionerForm from '../containers/ProvisionerForm';
import UserProfile from '../containers/UserProfile';

export default (
  <Route
    path="/"
    component={App}>
    <IndexRoute component={ProvisionerForm} />
    <Route status={404} path="*" component={ProvisionerForm} />
  </Route>
);