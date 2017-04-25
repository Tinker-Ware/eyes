import {SET_COOKIE_VALIDATION_KEY, SET_YII_GIT_REPO,SET_ENABLE_YII,SET_SHOW_YII,SET_REQUEST_ACTIVE_YII} from "../../constants/Roles";
import {Map} from "immutable";

const initialState = Map({
  roles: {
    role: "yii",
    sudo: "no"
  },
  path: "/opt/tinker/shared_files/yii_project/",
  default_repo: "https://github.com/Tinker-Ware/yii2-crud",
  default_repo_ssh: "git@github.com:Tinker-Ware/yii2-crud.git",
  default_repo_name: "yii2-crud",
  nginx: {
    "server_name": "_",
    "listen": "80",
    "extra_parameters": "location / {  proxy_set_header Host $http_host; proxy_set_header X-Real-IP $remote_addr; proxy_pass http://127.0.0.1:8080; }",
    "root": "_"
  }
});

const getId = (store) => {
  return store.toJS().reduce((maxId, todo) => Math.max(todo.id? todo.id : 0, maxId), 0) + 1;
};

export default function yii(state = initialState, action) {
  switch (action.type) {
    case SET_COOKIE_VALIDATION_KEY:
    {
      if(action.value.get("cookie_validation_key").toJS()[0].id)
        return state.set("cookie_validation_key",
          action.value.get("cookie_validation_keys").map(value=>
            value.get("id") === action.value.get("cookie_validation_key").toJS()[0].id ?
              action.value.get("cookie_validation_key").first() : value
          )
        );
      else
        return state.set("cookie_validation_key",
          action.value.get("cookie_validation_keys").toSet().union(
            action.value.get("cookie_validation_key").map(value=>
              value.set("id", getId(action.value.get("cookie_validation_keys")))
            )
          ).toList()
        );
    }
    case SET_YII_GIT_REPO:
    {
      return state.set("yii_git_repo", action.value.get("yii_git_repo"));
    }
    case SET_ENABLE_YII:
    {
      return state.set("enable_yii", action.value.get("enable_yii"));
    }
    case SET_SHOW_YII:
    {
      return state.set("show_yii", action.value.get("show_yii"));
    }
    case SET_REQUEST_ACTIVE_YII:
    {
      return state.set("request_active_yii", action.value.get("request_active_yii"));
    }
    default:
      return state;
  }
}
