import { SET_USER_PROJECTS } from "../../constants/Projects";
import { Map } from "immutable";

const initialState = Map({
});

export default function userProject(state = initialState, action) {
  switch (action.type) {
    case SET_USER_PROJECTS:
    {
      return state.set("user_projects", action.value.get("user_projects"));
    }
    default:
      return state;
  }
}
