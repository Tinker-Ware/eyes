import {SET_COOKIE_VALIDATION_KEY, SET_YII_GIT_REPO,SET_ENABLE_YII,SET_SHOW_YII,SET_REQUEST_ACTIVE_YII} from "../../constants/Roles";
import {Map} from "immutable";

const initialState = Map({
  roles: {
    role: "yii",
    sudo: "no"
  },
  nginx: {
    "server_name": "_",
    "listen": "80",
    "extra_parameters": "location / {  proxy_set_header Host $http_host; proxy_set_header X-Real-IP $remote_addr; proxy_pass http://127.0.0.1:8080; }",
    "root": "_"
  }
});

export default function yii(state = initialState, action) {
  switch (action.type) {
    case SET_COOKIE_VALIDATION_KEY:
    {
      return state.set("cookie_validation_key", action.value.get("cookie_validation_key"));
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
