import {SET_NODEJS_VERSION, SET_GHOST_NODEJS_ENABLED, SET_GHOST_NGINX_ENABLED, SET_GHOST_INSTALL_DIR, SET_GHOST_USER_NAME, SET_GHOST_USER_GROUP, SET_GHOST_REPO, SET_GHOST_CONFIG_URL, SET_GHOST_CONFIG_DATABASE, SET_ENABLE_GHOST, SET_SHOW_GHOST, SET_REQUEST_ACTIVE_GHOST} from "../../constants/Roles";
import {Map} from "immutable";

const initialState = Map({
  roles: [{
    role: "ghost",
    sudo: "no"
  }],
  nginx: {
    "server_name": "blog.tinkerware.io",
    "listen": "80",
    "extra_parameters": "location / { proxy_set_header Host $http_host; proxy_set_header    X-Real-IP $remote_addr; proxy_pass http://127.0.0.1:2368; }",
    "root": "{{ ghost_install_dir }}"
  }
});

export default function ghost(state = initialState, action) {
  switch (action.type) {
    case SET_NODEJS_VERSION:
    {
      return state.set("nodejs_version", action.value.get("nodejs_version"));
    }
    case SET_GHOST_NODEJS_ENABLED:
    {
      return state.set("ghost_nodejs_enabled", action.value.get("ghost_nodejs_enabled"));
    }
    case SET_GHOST_NGINX_ENABLED:
    {
      return state.set("ghost_nginx_enabled", action.value.get("ghost_nginx_enabled"));
    }
    case SET_GHOST_INSTALL_DIR:
    {
      return state.set("ghost_install_dir", action.value.get("ghost_install_dir"));
    }
    case SET_GHOST_USER_NAME:
    {
      return state.set("ghost_user_name", action.value.get("ghost_user_name"));
    }
    case SET_GHOST_USER_GROUP:
    {
      return state.set("ghost_user_group", action.value.get("ghost_user_group"));
    }
    case SET_GHOST_REPO:
    {
      return state.set("ghost_repo", action.value.get("ghost_repo"));
    }
    case SET_GHOST_CONFIG_URL:
    {
      return state.set("ghost_config_url", action.value.get("ghost_config_url"));
    }
    case SET_GHOST_CONFIG_DATABASE:
    {
      return state.set("ghost_config_database",
        action.value.get("databases").toSet().union(
          action.value.get("database")
        ).toList()
      );
    }
    case SET_ENABLE_GHOST:
    {
      return state.set("enable_ghost", action.value.get("enable_ghost"));
    }
    case SET_SHOW_GHOST:
    {
      return state.set("show_ghost", action.value.get("show_ghost"));
    }
    case SET_REQUEST_ACTIVE_GHOST:
    {
      return state.set("request_active_ghost", action.value.get("request_active_ghost"));
    }
    default:
      return state;
  }
}
