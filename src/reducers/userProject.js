import { Map } from "immutable";
import { SET_USER_PROJECT, REQUEST_POST_USER_PROJECT_FAILED } from "../constants/ActionTypes";

const initialState = Map({
  user_project: ""
});

export default function userProject(state = initialState, action) {
  switch (action.type) {
    case SET_USER_PROJECT:
    {
      return state.set("user_project", action.value.get("user_project"));
    }
    case REQUEST_POST_USER_PROJECT_FAILED:
    {
      return state.set("request_post_user_project_failed", action.value.get("error"));
    }
    default:
      return state;
  }
}
