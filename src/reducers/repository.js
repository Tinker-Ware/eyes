import * as types from '../constants/ActionTypes';
import {Map} from 'immutable';

const initialState = Map({github_user_name:"", github_repository_name:"", github_configuration_enable:true});

export default function repository(state = initialState, action) {
  switch (action.type) {
    case types.SET_GITHUB_USER_NAME:
    {
      return state.set('github_user_name', action.value);
    }
    case types.SET_GITHUB_REPOSITORY_NAME:
    {
      return state.set('github_repository_name', action.value);
    }
    case types.SET_GITHUB_CONFIGURATION_ENABLE:
    {
      return state.set('github_configuration_enable', action.value);
    }
    default:
      return state;
  }
}
