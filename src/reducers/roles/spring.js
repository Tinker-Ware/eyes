import {SET_ENABLE_SPRING} from "../../constants/Roles";
import {Map} from "immutable";

const initialState = Map({
  roles: {
    role: "spring",
    sudo: "no"
  },
  default_repo: "https://github.com/Tinker-Ware/gs-maven",
  nginx: {}
});

export default function spring(state = initialState, action) {
  switch (action.type) {
    case SET_ENABLE_SPRING:
    {
      return state.set("enable_spring", action.value.get("enable_spring"));
    }
    default:
      return state;
  }
}
