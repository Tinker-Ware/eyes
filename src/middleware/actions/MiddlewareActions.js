import * as types from '../../constants/ActionTypes';

export function receiveRepository(integration){
  return {
    type: types.SET_INTEGRATION,
    value: integration
  };
}

export function receiveRepositories(repositories){
  return{
    type: types.SET_REPOSITORIES,
    value: repositories
  };
}