import { SET_USER, SET_USER_INFORMATION , SET_USER_SESION, SET_USER_SESION_EMAIL, SET_USER_SESION_PASSWORD} from '../constants/ActionTypes';
import { Map } from 'immutable';

const initialState = Map({
  user: "", user_information: ""
});

export default function user(state = initialState, action) {
  switch (action.type) {
    case SET_USER:
    {
      return state.set('user', action.value.get('user'));
    }
    case SET_USER_INFORMATION:
    {
      return state.set('user_information', action.value.get('user_information'));
    }
    case SET_USER_SESION:
    {
      return state.set('user_sesion', action.value.get('user_sesion'));
    }
    case SET_USER_SESION_EMAIL:
    {
      return state.set('user_sesion_email', action.value.get('user_sesion_email'));
    }
    case SET_USER_SESION_PASSWORD:
    {
      return state.set('user_sesion_password', action.value.get('user_sesion_password'));
    }
    default:
      return state;
  }
}
