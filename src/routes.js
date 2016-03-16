import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import ServiceForm from './components/ServiceForm';
import UserProfile from './components/UserProfile';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={ServiceForm} />
  <Route path="user" component={UserProfile} />
  </Route>
);
