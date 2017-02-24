import { ADD_ENVIRONMENT, SET_ACTIVE_ENVIRONMENT, SET_APPLICATION, SET_APPLICATION_ONE_CLICK_APP } from "../constants/ActionTypes";
import { Map } from "immutable";

const initialState = Map({
  application_name: "",
  application_evironments:[
    {
      id:0,
      name:"developmet"
    },
    {
      id:1,
      name:"production"
    }
  ],
  active_environment: 0
});

export default function application(state = initialState, action) {
  switch (action.type) {
    case SET_APPLICATION:
    {
      return state.set("application_name", action.value.get("application"));
    }
    case SET_ACTIVE_ENVIRONMENT:
    {
      return state.set("active_environment", action.value.get("active_environment"));
    }
    case SET_APPLICATION_ONE_CLICK_APP:
    {
      return state.set("application_oneclickapp", action.value.get("applications").filter(value =>
        value.toJS().id !== action.value.get("application").toJS()[0].id
      ).toSet().union(action.value.get("application")).toList());
    }
    case ADD_ENVIRONMENT:
    {
      return state.set("application_evironments", action.value.get("evironments").filter(value =>
        value.toJS().name !== action.value.get("evironment").toJS()[0].name
      ).toSet().union(action.value.get("evironment")).toList());
    }
    default:
      return state;
  }
}
