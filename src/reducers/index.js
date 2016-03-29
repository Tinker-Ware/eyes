import { combineReducers } from 'redux';
import applicationAppState from './application';
import projectNameAppState from './projectName';
import repositoryNameAppState from './repositoryName';

const rootReducer = combineReducers({
  applicationAppState,
  projectNameAppState,
  repositoryNameAppState
});

export default rootReducer;
