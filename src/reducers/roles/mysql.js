import {SET_MYSQL_ROOT_PASSWORD, SET_MYSQL_USERS, SET_MYSQL_PACKAGES, SET_MYSQL_DATABASES,SET_ENABLE_MYSQL,SET_SHOW_MYSQL, SET_REQUEST_ACTIVE_MYSQL, UPDATE_MYSQL_USERS} from "../../constants/Roles";
import {Map} from "immutable";
import cookie from "react-cookie";

const initialState = Map({
  cookie_validation_key: "",
  roles: [
    {
      role: "mysql", sudo: true
    }
  ]
});

const getId = (store) => {
  return store.toJS().reduce((maxId, todo, id) => Math.max(todo.id?todo.id:0, maxId), 0) + 1
};

export default function mysql(state = initialState, action) {
  switch (action.type) {
    case SET_MYSQL_ROOT_PASSWORD:
    {
      return state.set("mysql_root_password", action.value.get("mysql_root_password"));
    }
    case SET_MYSQL_USERS:
    {
      let newId = getId(action.value.get("mysql_users"));
      cookie.save("mysql_users-id", newId, { path:"/"});
      return state.set("mysql_users",
        action.value.get("mysql_users").toSet().union(
          action.value.get("mysql_user").map(value=>
            value.set("id", newId)
          )
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
    case UPDATE_MYSQL_USERS:
    {
      return state.set("mysql_users",
        action.value.get("mysql_users").map(value=>
          value.get("id") === action.value.get("mysql_user").first().get("id") ?
            action.value.get("mysql_user").first() : value
        )
      );
    }
    default:
      return state;
  }
}
