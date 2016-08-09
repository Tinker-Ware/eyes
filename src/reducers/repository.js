import * as types from '../constants/ActionTypes';
import { Map, fromJS } from 'immutable';

const initialState = Map({
  integration: "",
  repositories: "",
  repository: "", 
  show_repositories: false
});

export default function repository(state = initialState, action) {
  switch (action.type) {
    case types.SET_REPOSITORIES:
    {
      return state.set('repositories', action.value.get('repositories'));
    }
    case types.SET_REPOSITORY:
    {
      return state.set('repository', action.value.get('repository'));
    }
    case types.SET_INTEGRATION:
    {
      return state.set('integration', action.value.get('integration'));
    }
    case types.SET_SHOW_REPOSITORIES:
    {
      return state.set('show_repositories', action.value.get('show'));
    }
    default:
      return state;
  }
}