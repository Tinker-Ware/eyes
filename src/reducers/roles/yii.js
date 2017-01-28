import {SET_COOKIE_VALIDATION_KEY, SET_YII_GIT_REPO} from "../../constants/Roles";
import {Map} from "immutable";

const initialState = Map({
  cookie_validation_key: ""
});

export default function yii(state = initialState, action) {
  switch (action.type) {
    case SET_COOKIE_VALIDATION_KEY:
    {
      return state.set("cookie_validation_key", action.value.get("cookie_validation_key"));
    }
    case SET_YII_GIT_REPO:
    {
      return state.set("yii_git_repo", action.value.get("yii_git_repo"));
    }
    default:
      return state;
  }
}
