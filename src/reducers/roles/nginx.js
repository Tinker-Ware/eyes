import {SET_NGINX_REMOVE_DEFAULT_VHOST,SET_NGINX_VHOSTS,SET_SHOW_NGINX,SET_REQUEST_ACTIVE_NGINX} from "../../constants/Roles";
import {Map} from "immutable";

const initialState = Map({
  cookie_validation_key: ""
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
