import {SET_ENABLE_NODEJS} from "../../constants/Roles";
import {Map} from "immutable";

const initialState = Map({
  roles: [{
    role: "nodejs",
    sudo: "yes"
  },
  {
    role: "nodejs_project",
    sudo: "yes"
  }],
  default_repo: "https://github.com/Tinker-Ware/react-repo-example",
  nginx: {
    "server_name": "_",
    "listen": "80",
    "extra_parameters": "location / {  proxy_set_header Host $http_host; proxy_set_header X-Real-IP $remote_addr; proxy_pass http://127.0.0.1:3000; }",
    "root": "_"
  }
});

export default function nodejs(state = initialState, action) {
  switch (action.type) {
    case SET_ENABLE_NODEJS:
    {
      return state.set("enable_nodejs", action.value.get("enable_nodejs"));
    }
    default:
      return state;
  }
}
