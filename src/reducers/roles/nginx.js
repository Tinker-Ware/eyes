import {SET_NGINX_REMOVE_DEFAULT_VHOST,SET_NGINX_VHOSTS,SET_ENABLE_NGINX,SET_SHOW_NGINX,SET_REQUEST_ACTIVE_NGINX} from "../../constants/Roles";
import {Map} from "immutable";

const initialState = Map({
  cookie_validation_key: "",
  enable_nginx: false,
  roles: [{
    role: "nginx",
    sudo: "yes",
    tags: "nginx"
  }],
  nginx: {
    "nginx_remove_default_vhost": true
  }
});

export default function nginx(state = initialState, action) {
  switch (action.type) {
    case SET_NGINX_REMOVE_DEFAULT_VHOST:
    {
      return state.set("nginx_remove_default_vhost", action.value.get("nginx_remove_default_vhost"));
    }
    case SET_NGINX_VHOSTS:
    {
      return state.set("nginx_vhosts",
        action.value.get("nginx_vhosts").toSet().union(
          action.value.get("nginx_vhost")
        ).toList()
      );
    }
    case SET_ENABLE_NGINX:
    {
      return state.set("enable_nginx", action.value.get("enable_nginx"));
    }
    case SET_SHOW_NGINX:
    {
      return state.set("show_nginx", action.value.get("show_nginx"));
    }
    case SET_REQUEST_ACTIVE_NGINX:
    {
      return state.set("request_active_nginx", action.value.get("request_active_nginx"));
    }
    default:
      return state;
  }
}
