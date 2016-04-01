import * as types from '../constants/ActionTypes';
import {Map} from 'immutable';

const initialState = Map();

export default function repositoryName(state = initialState, action) {
  switch (action.type) {
    case types.SET_REPOSITORY_NAME:
    {
      return state.set('repository_name', action.value);
    }
    default:
      return state;
  }
}
