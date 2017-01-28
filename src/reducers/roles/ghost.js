import {SET_NODEJS_VERSION, SET_GHOST_NODEJS_ENABLED, SET_GHOST_NGINX_ENABLED, SET_GHOST_INSTALL_DIR, SET_GHOST_USER_NAME, SET_GHOST_USER_GROUP, SET_GHOST_REPO, SET_GHOST_CONFIG_URL, SET_GHOST_CONFIG_DATABASE} from "../../constants/Roles";
import {Map} from "immutable";

const initialState = Map({
  cookie_validation_key: ""
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
    default:
      return state;
  }
}
