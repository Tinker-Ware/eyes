import {Map, fromJS} from "immutable";
import {expect} from "chai";
import yii from "../../reducers/roles/yii";

describe("reducer", () => {
  it("handles SET_COOKIE_VALIDATION_KEY", () => {
    const initialState = Map();
    const action = {type:"SET_COOKIE_VALIDATION_KEY", value: fromJS({
      cookie_validation_key:"pass"})};
    const nextState = yii(initialState, action);

    expect(nextState).to.equal(fromJS({
      cookie_validation_key:"pass"}));
  });
  it("handles SET_YII_GIT_REPO", () => {
    const initialState = Map();
    const action = {type:"SET_YII_GIT_REPO", value: fromJS({
      yii_git_repo:"git@github.com:bussiness/reponame.git"})};
    const nextState = yii(initialState, action);

    expect(nextState).to.equal(fromJS({
      yii_git_repo:"git@github.com:bussiness/reponame.git"}));
  });
  it("handles DEFAULT", () => {
    const initialState = Map();
    const action = {type:""};
    const nextState = yii(initialState, action);

    expect(nextState).to.equal(fromJS({
    }));
  });
});
