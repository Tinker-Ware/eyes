import {SET_MYSQL_ROOT_PASSWORD, SET_MYSQL_USERS, SET_MYSQL_PACKAGES, SET_MYSQL_DATABASES,SET_ENABLE_MYSQL,SET_SHOW_MYSQL, SET_REQUEST_ACTIVE_MYSQL} from "../../constants/Roles";
import {Map} from "immutable";

const initialState = Map({
  cookie_validation_key: ""
});

export default function mysql(state = initialState, action) {
  switch (action.type) {
    case SET_MYSQL_ROOT_PASSWORD:
    {
      return state.set("mysql_root_password", action.value.get("mysql_root_password"));
    }
    case SET_MYSQL_USERS:
    {
      return state.set("mysql_users",
        action.value.get("mysql_users").toSet().union(
          action.value.get("mysql_user")
        ).toList()
      );
    }
    case SET_MYSQL_PACKAGES:
    {
      return state.set("mysql_packages", action.value.get("mysql_packages"));
    }
    case SET_MYSQL_DATABASES:
    {
      return state.set("mysql_databases",
        action.value.get("mysql_databases").toSet().union(
          action.value.get("mysql_database")
        ).toList()
      );
    }
    case SET_SHOW_MYSQL:
    {
      return state.set("show_mysql", action.value.get("show_mysql"));
    }
    case SET_ENABLE_MYSQL:
    {
      return state.set("enable_mysql", action.value.get("enable_mysql"));
    }
    case SET_REQUEST_ACTIVE_MYSQL:
    {
      return state.set("request_active_mysql", action.value.get("request_active_mysql"));
    }
    default:
      return state;
  }
}
