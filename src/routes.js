import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import Profile from './components/user/Profile';
import ProvisionerForm from './containers/ProvisionerForm';
import UserProfile from './containers/UserProfile';
import UserAuth from './containers/UserAuth';
import Signup from './components/userAuth/Signup';

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
      path="/login"
      component={UserAuth} />
    <Route
      path="/registrations/new"
      component={Signup} />
  </Route>
);
