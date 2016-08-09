import * as types from '../constants/ActionTypes';
import { Map } from 'immutable';

const initialState = Map({
  project_name: ""
});

export default function projectName(state = initialState, action) {
  switch (action.type) {
    case types.SET_PROJECT_NAME:
    {
      return state.set('project_name', action.value.get('name'));
    }
    default:
      return state;
  }
}
