import {SET_MYSQL_DATABASE_INDEX, REMOVE_MYSQL_DATABASE, REMOVE_MYSQL_USER, SET_MYSQL_ROOT_PASSWORD, SET_MYSQL_USERS, SET_MYSQL_PACKAGES, SET_MYSQL_DATABASES,SET_ENABLE_MYSQL,SET_SHOW_MYSQL, SET_REQUEST_ACTIVE_MYSQL, UPDATE_MYSQL_USERS, SET_SHOW_MYSQL_USER, SET_SHOW_MYSQL_DATABASE} from "../../constants/Roles";
import {Map} from "immutable";

const initialState = Map({
  roles: {
    role: "mysql",
    sudo: "yes"
  },
  show_mysql: false,
  show_mysql_user: false,
  show_mysql_database: false,
  mysql_database_index: 0
});

const getId = (store) => {
  return store.toJS().reduce((maxId, todo) => Math.max(todo.id? todo.id : 0, maxId), 0) + 1;
};

export default function mysql(state = initialState, action) {
  switch (action.type) {
    case SET_MYSQL_ROOT_PASSWORD:
    {
      if(action.value.get("mysql_root_password").toJS()[0].id)
        return state.set("mysql_root_password",
          action.value.get("mysql_root_passwords").map(value=>
            value.get("id") === action.value.get("mysql_root_password").toJS()[0].id ?
              action.value.get("mysql_root_password").first() : value
          )
        );
      else
        return state.set("mysql_root_password",
          action.value.get("mysql_root_passwords").toSet().union(
            action.value.get("mysql_root_password").map(value=>
              value.set("id", getId(action.value.get("mysql_root_passwords")))
            )
          ).toList()
        );
    }
    case SET_MYSQL_USERS:
    {
      return state.set("mysql_users",
        action.value.get("mysql_users").toSet().union(
          action.value.get("mysql_user").map(value=>
            value.set("id", getId(action.value.get("mysql_users")))
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
      if(action.value.get("mysql_database").toJS()[0].id)
        return state.set("mysql_databases",
          action.value.get("mysql_databases").map(value=>
            value.get("id") === action.value.get("mysql_database").toJS()[0].id ?
              action.value.get("mysql_database").first() : value
          )
        );
      else
        return state.set("mysql_databases",
          action.value.get("mysql_databases").toSet().union(
            action.value.get("mysql_database").map(value=>
              value.set("id", getId(action.value.get("mysql_databases")))
            )
          ).toList()
        );
    }
    case SET_SHOW_MYSQL:
    {
      return state.set("show_mysql", action.value.get("show_mysql"));
    }
    case SET_SHOW_MYSQL_USER:
    {
      return state.set("show_mysql_user", action.value.get("show_mysql_user"));
    }
    case SET_SHOW_MYSQL_DATABASE:
    {
      return state.set("show_mysql_database", action.value.get("show_mysql_database"));
    }
    case SET_MYSQL_DATABASE_INDEX:
    {
      return state.set("mysql_database_index", action.value.get("mysql_database_index"));
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
          value.get("id") === action.value.get("mysql_user").get("id") &&
          value.get("environment") === action.value.get("mysql_user").get("environment") ?
            action.value.get("mysql_user") : value
        )
      );
    }
    case REMOVE_MYSQL_USER:
    {
      return state.set("mysql_users", action.value.get("mysql_users").filter(value=>
        value.get("id") !== action.value.get("mysql_user").get("id") &&
        value.get("environment") !== action.value.get("mysql_user").get("environment")
      ));
    }
    case REMOVE_MYSQL_DATABASE:
    {
      return state.set("mysql_databases", action.value.get("mysql_databases").filter(value=>
        value.get("id") !== action.value.get("mysql_database").get("id") &&
        value.get("environment") !== action.value.get("mysql_database").get("environment")
      ));
    }
    default:
      return state;
  }
}
