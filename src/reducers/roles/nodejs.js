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
  nginx: {}
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
