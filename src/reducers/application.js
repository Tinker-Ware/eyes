import * as types from '../constants/ActionTypes';
import {Map} from 'immutable';

const initialState = Map();

export default function application(state = initialState, action) {
  switch (action.type) {
    case types.SET_APPLICATION:
    {
      return state.set('application_name', action.value);
    }
    default:
      return state;
  }
}
