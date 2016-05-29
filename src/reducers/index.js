import {combineReducers} from 'redux';
import serverProviderAppState from './serverProvider';
import applicationAppState from './application';
import projectNameAppState from './projectName';
import repositoryAppState from './repository';

const rootReducer = combineReducers({
  serverProviderAppState,
  applicationAppState,
  projectNameAppState,
  repositoryAppState
});

export default rootReducer;
