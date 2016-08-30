import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import applicationAppState from './application';
import cloudProviderAppState from './cloudProvider';
import projectNameAppState from './projectName';
import repositoryAppState from './repository';
import userAppState from './user';
import userProjectAppState from './userProject';

const rootReducer = combineReducers({
  applicationAppState,
  cloudProviderAppState,
  projectNameAppState,
  repositoryAppState,
  userAppState,
  userProjectAppState,
  routing: routerReducer
});

export default rootReducer;
