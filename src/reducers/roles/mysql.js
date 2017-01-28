import {SET_MYSQL_ROOT_PASSWORD, SET_MYSQL_USERS, SET_MYSQL_PACKAGES, SET_MYSQL_DATABASES} from "../../constants/Roles";
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
    default:
      return state;
  }
}
