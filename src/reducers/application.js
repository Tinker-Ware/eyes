import { SET_APPLICATION, SET_APPLICATION_ONE_CLICK_APP } from "../constants/ActionTypes";
import { Map } from "immutable";

const initialState = Map({
  application_name: ""
});

export default function application(state = initialState, action) {
  switch (action.type) {
    case SET_APPLICATION:
    {
      return state.set("application_name", action.value.get("application"));
    }
    case SET_APPLICATION_ONE_CLICK_APP:
    {
      return state.set("application_oneclickapp",
        action.value.get("applications").toSet().union(
          action.value.get("application").map( value =>
            value.set("enable", false)
          )
        ).toList()
      );
    }
    default:
      return state;
  }
}
