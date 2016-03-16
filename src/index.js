import React from 'react';
import {render} from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import './styles/foundation.css';
import './styles/styles.scss';
import './icons/foundation-icons.css';

render(
  <Router history={browserHistory} routes={routes} />, document.getElementById('app')
);
