import {SET_USER,SET_SSH,SET_SSH_KEY_PATH,SET_USER_EMAIL,SET_USER_NAME,SET_SERVER_USER,SET_SERVER_GROUP,SET_USERS,SET_CRONJOBS,SET_PRIVATE_KEY,SET_PRIVATE_KEY_NAME} from "../../constants/Roles";
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
    case SET_PRIVATE_KEY:
    {
      return state.set("private_key", action.value.get("private_key"));
    }
    case SET_PRIVATE_KEY_NAME:
    {
      return state.set("private_key_name", action.value.get("private_key_name"));
    }
    case SET_SERVER_USER:
    {
      return state.set("server_user", action.value.get("server_user"));
    }
    case SET_SERVER_GROUP:
    {
      return state.set("server_group", action.value.get("server_group"));
    }
    case SET_USERS:
    {
      return state.set("users",
        action.value.get("users").toSet().union(
          action.value.get("user")
        ).toList()
      );
    }
    case SET_CRONJOBS:
    {
      return state.set("cronjobs",
        action.value.get("cronjobs").toSet().union(
          action.value.get("cronjob")
        ).toList()
      );
    }
    default:
      return state;
  }
}
