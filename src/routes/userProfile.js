import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from '../components/App';
import Profile from '../components/user/Profile';
import UserProfile from '../containers/UserProfile';

export default (
  <Route
    path="/"
    component={UserProfile}>
    <IndexRoute component={Profile} />
  </Route>
);
