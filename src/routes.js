import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import ProvisionPage from './components/ProvisionPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={ProvisionPage} />
  </Route>
);
