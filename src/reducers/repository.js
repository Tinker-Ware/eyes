import { SET_REPOSITORIES, SET_REPOSITORY, SET_INTEGRATION, SET_SHOW_REPOSITORIES } from "../constants/ActionTypes";
import { Map } from "immutable";

const initialState = Map({
  integration: "",
  repositories: "",
  repository: "",
  show_repositories: false
});

export default function repository(state = initialState, action) {
  switch (action.type) {
    case SET_REPOSITORIES:
    {
      return state.set("repositories", action.value.get("repositories"));
    }
    case SET_REPOSITORY:
    {
      return state.set("repository", action.value.get("repository"));
    }
    case SET_INTEGRATION:
    {
      return state.set("integration", action.value.get("integration"));
    }
    case SET_SHOW_REPOSITORIES:
    {
      return state.set("show_repositories", action.value.get("show"));
    }
    default:
      return state;
  }
}
