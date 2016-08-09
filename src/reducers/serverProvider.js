import * as types from '../constants/ActionTypes';
import { Map } from 'immutable';

const initialState = Map({
  server_provider: ""
});

export default function serverProvider(state = initialState, action) {
  switch (action.type) {
    case types.SET_SERVER_PROVIDER:
    {
      return state.set('server_provider', action.value);
    }
    default:
      return state;
  }
}
