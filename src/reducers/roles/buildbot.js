import {SET_ENABLE_BUILDBOT} from "../../constants/Roles";
import {Map} from "immutable";

const initialState = Map({
  roles: {
    role: "buildbot",
    sudo: "no"
  },
  nginx: {}
});

export default function plainHtml(state = initialState, action) {
  switch (action.type) {
    case SET_ENABLE_BUILDBOT:
    {
      return state.set("enable_buildbot", action.value.get("enable_buildbot"));
    }
    default:
      return state;
  }
}
