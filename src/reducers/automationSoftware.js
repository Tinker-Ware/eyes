import * as types from '../constants/ActionTypes';
import { Map } from 'immutable';

const initialState = Map({
  automation_software: ""
});

export default function automationSoftware(state = initialState, action) {
  switch (action.type) {
    case types.SET_AUTOMATION_SOFTWARE:
    {
      return state.set('automation_software', action.value);
    }
    default:
      return state;
  }
}
