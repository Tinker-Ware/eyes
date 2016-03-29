import { combineReducers } from 'redux';
import projectNameAppState from './projectName';
import repositoryNameAppState from './repositoryName';

const rootReducer = combineReducers({
  projectNameAppState,
  repositoryNameAppState
});

export default rootReducer;
