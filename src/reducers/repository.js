import * as types from '../constants/ActionTypes';
import {Map} from 'immutable';

const initialState = Map({user_name:""});

export default function repository(state = initialState, action) {
  switch (action.type) {
    case types.SET_GITHUB_USER_NAME:
    {
      return state.set('user_name', action.value);
    }
    case types.SET_REPOSITORY_NAME:
    {
      return state.set('repository_name', action.value);
    }
    default:
      return state;
  }
}
