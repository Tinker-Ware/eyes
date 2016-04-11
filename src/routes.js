import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import ProvisionerForm from './containers/ProvisionerForm';
import UserProfile from './components/UserProfile';
import Profile from './components/user/Profile';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={ProvisionerForm} />
      <Route path="/user" component={UserProfile}>
        <IndexRoute component={Profile} />
      </Route>
  </Route>

);
