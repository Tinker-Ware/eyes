import {SET_ENABLE_SPARK} from "../../constants/Roles";
import {Map} from "immutable";

const initialState = Map({
  roles: [{
    role: "spark",
    sudo: "no"
  }],
  default_repo: "https://github.com/Tinker-Ware/plainHtml",
  nginx: {}
});

export default function spark(state = initialState, action) {
  switch (action.type) {
    case SET_ENABLE_SPARK:
    {
      return state.set("enable_spark", action.value.get("enable_spark"));
    }
    default:
      return state;
  }
}
