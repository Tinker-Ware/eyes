import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import ServiceForm from './components/ServiceForm';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={ServiceForm} />
  </Route>
);
