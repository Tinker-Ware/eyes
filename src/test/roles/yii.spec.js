import {Map, fromJS} from "immutable";
import {expect} from "chai";
import yii from "../../reducers/roles/yii";

describe("yii role", () => {
  it("handles SET_COOKIE_VALIDATION_KEY", () => {
    const initialState = Map();
    const action = {type:"SET_COOKIE_VALIDATION_KEY", value: fromJS({
      cookie_validation_keys:
        [{
          id: 1,
          environment: 1,
          cookie_validation_key: "username"
        }],
      cookie_validation_key: [{
        environment: 2,
        cookie_validation_key: "username"
      }]})};
    const nextState = yii(initialState, action);

    expect(nextState).to.equal(fromJS({
      cookie_validation_key:[{
        id: 1,
        environment: 1,
        cookie_validation_key: "username"
      },
      {
        id: 2,
        environment: 2,
        cookie_validation_key: "username"
      }]
    }));
  });
  it("handles SET_YII_GIT_REPO", () => {
    const initialState = Map();
    const action = {type:"SET_YII_GIT_REPO", value: fromJS({
      yii_git_repo:"git@github.com:bussiness/reponame.git"})};
    const nextState = yii(initialState, action);

    expect(nextState).to.equal(fromJS({
      yii_git_repo:"git@github.com:bussiness/reponame.git"}));
  });
  it("handles SET_ENABLE_YII", () => {
    const initialState = Map();
    const action = {type:"SET_ENABLE_YII", value: fromJS({
      enable_yii:true})};
    const nextState = yii(initialState, action);

    expect(nextState).to.equal(fromJS({
      enable_yii:true}));
  });
  it("handles SET_SHOW_YII", () => {
    const initialState = Map();
    const action = {type:"SET_SHOW_YII", value: fromJS({
      show_yii:true})};
    const nextState = yii(initialState, action);

    expect(nextState).to.equal(fromJS({
      show_yii:true}));
  });
  it("handles SET_REQUEST_ACTIVE_YII", () => {
    const initialState = Map();
    const action = {type:"SET_REQUEST_ACTIVE_YII", value: fromJS({
      request_active_yii:true})};
    const nextState = yii(initialState, action);

    expect(nextState).to.equal(fromJS({
      request_active_yii:true}));
  });
  it("handles DEFAULT", () => {
    const initialState = Map();
    const action = {type:""};
    const nextState = yii(initialState, action);

    expect(nextState).to.equal(fromJS({
    }));
  });
});
