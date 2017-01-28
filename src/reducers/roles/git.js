import {SET_USER,SET_SSH,SET_SSH_KEY_PATH,SET_USER_EMAIL,SET_USER_NAME} from "../../constants/Roles";
import {Map} from "immutable";

const initialState = Map({
  cookie_validation_key: ""
});

export default function git(state = initialState, action) {
  switch (action.type) {
    case SET_USER:
    {
      return state.set("user", action.value.get("user"));
    }
    case SET_SSH:
    {
      return state.set("ssh", action.value.get("ssh"));
    }
    case SET_SSH_KEY_PATH:
    {
      return state.set("ssh_key_path", action.value.get("ssh_key_path"));
    }
    case SET_USER_EMAIL:
    {
      return state.set("user_email", action.value.get("user_email"));
    }
    case SET_USER_NAME:
    {
      return state.set("user_name", action.value.get("user_name"));
    }
    default:
      return state;
  }
}
