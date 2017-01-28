import {SET_SERVER_USER,SET_SERVER_GROUP,SET_SERVER_NAME,SET_REPO_PATH,SET_GITHUB_REPO} from "../../constants/Roles";
import {Map} from "immutable";

const initialState = Map({
  cookie_validation_key: ""
});

export default function plainHtml(state = initialState, action) {
  switch (action.type) {
    case SET_SERVER_USER:
    {
      return state.set("server_user", action.value.get("server_user"));
    }
    case SET_SERVER_GROUP:
    {
      return state.set("server_group", action.value.get("server_group"));
    }
    case SET_SERVER_NAME:
    {
      return state.set("server_name", action.value.get("server_name"));
    }
    case SET_REPO_PATH:
    {
      return state.set("repo_path", action.value.get("repo_path"));
    }
    case SET_GITHUB_REPO:
    {
      return state.set("github_repo", action.value.get("github_repo"));
    }
    default:
      return state;
  }
}
