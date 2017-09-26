import {SET_ENABLE_MONGODB} from "../../constants/Roles";
import {Map} from "immutable";

const initialState = Map({
  roles: [{
    role: "mongodb",
    sudo: "yes"
  }],
  nginx: {}
});

export default function mongodb(state = initialState, action) {
  switch (action.type) {
    case SET_ENABLE_MONGODB:
    {
      return state.set("enable_mongodb", action.value.get("enable_mongodb"));
    }
    default:
      return state;
  }
}
