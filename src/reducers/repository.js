import * as types from '../constants/ActionTypes';
import {Map} from 'immutable';

const initialState = Map({repository:"", show_repositories:true});

export default function repository(state = initialState, action) {
  switch (action.type) {
    case types.SET_REPOSITORY:
    {
      return state.set('repository', Map(action.value));
    }
    case types.SET_INTEGRACION:
    {
      return state.set('integracion', action.value);
    }
    case types.SET_SHOW_REPOSITORIES:
    {
      return state.set('show_repositories', action.value);
    }
    default:
      return state;
  }
}