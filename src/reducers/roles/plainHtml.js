import {SET_SERVER_NAME,SET_REPO_PATH,SET_GITHUB_REPO,SET_ENABLE_PLAINHTML,SET_SHOW_PLAINHTML,SET_REQUEST_ACTIVE_PLAINHTML} from "../../constants/Roles";
import {Map} from "immutable";

const initialState = Map({
  roles: [{
    role: "web",
    sudo: "no"
  }],
  default_repo: "https://github.com/Tinker-Ware/plainHtml",
  nginx: {
    "server_name": "_",
    "listen": "80",
    "root": "{{ repo_path }}/{{ server_name }}"
  }
});

export default function plainHtml(state = initialState, action) {
  switch (action.type) {
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
    case SET_ENABLE_PLAINHTML:
    {
      return state.set("enable_plainhtml", action.value.get("enable_plainhtml"));
    }
    case SET_SHOW_PLAINHTML:
    {
      return state.set("show_plainhtml", action.value.get("show_plainhtml"));
    }
    case SET_REQUEST_ACTIVE_PLAINHTML:
    {
      return state.set("request_active_plainhtml", action.value.get("request_active_plainhtml"));
    }
    default:
      return state;
  }
}
