import {combineReducers} from 'redux';
import applicationAppState from './application';
import projectNameAppState from './projectName';
import repositoryAppState from './repository';

const rootReducer = combineReducers({
  applicationAppState,
  projectNameAppState,
  repositoryAppState
});

export default rootReducer;
