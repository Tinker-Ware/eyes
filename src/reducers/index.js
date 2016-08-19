import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import applicationAppState from './application';
import cloudProviderAppState from './cloudProvider';
import projectNameAppState from './projectName';
import repositoryAppState from './repository';
import userAppState from './user';

const rootReducer = combineReducers({
  applicationAppState,
  cloudProviderAppState,
  projectNameAppState,
  repositoryAppState,
  userAppState,
  routing: routerReducer
});

export default rootReducer;
