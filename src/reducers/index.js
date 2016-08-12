import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import cloudProviderAppState from './cloudProvider';
import applicationAppState from './application';
import projectNameAppState from './projectName';
import repositoryAppState from './repository';

const rootReducer = combineReducers({
  cloudProviderAppState,
  applicationAppState,
  projectNameAppState,
  repositoryAppState,
  routing: routerReducer
});

export default rootReducer;
