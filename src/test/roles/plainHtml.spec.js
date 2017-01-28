import {Map, fromJS} from "immutable";
import {expect} from "chai";
import plainHtml from "../../reducers/roles/plainHtml";

describe("reducer", () => {
  it("handles SET_SERVER_USER", () => {
    const initialState = Map();
    const action = {type:"SET_SERVER_USER", value: fromJS({
      server_user:"user"})};
    const nextState = plainHtml(initialState, action);

    expect(nextState).to.equal(fromJS({
      server_user:"user"}));
  });
  it("handles SET_SERVER_GROUP", () => {
    const initialState = Map();
    const action = {type:"SET_SERVER_GROUP", value: fromJS({
      server_group:"group"})};
    const nextState = plainHtml(initialState, action);

    expect(nextState).to.equal(fromJS({
      server_group:"group"}));
  });
  it("handles SET_SERVER_NAME", () => {
    const initialState = Map();
    const action = {type:"SET_SERVER_NAME", value: fromJS({
      server_name:"name"})};
    const nextState = plainHtml(initialState, action);

    expect(nextState).to.equal(fromJS({
      server_name:"name"}));
  });
  it("handles SET_REPO_PATH", () => {
    const initialState = Map();
    const action = {type:"SET_REPO_PATH", value: fromJS({
      repo_path:"/opt/tinker/shared_files/foldername"})};
    const nextState = plainHtml(initialState, action);

    expect(nextState).to.equal(fromJS({
      repo_path:"/opt/tinker/shared_files/foldername"}));
  });
  it("handles SET_GITHUB_REPO", () => {
    const initialState = Map();
    const action = {type:"SET_GITHUB_REPO", value: fromJS({
      github_repo:"git@github.com:bussiness/reponame.git"})};
    const nextState = plainHtml(initialState, action);

    expect(nextState).to.equal(fromJS({
      github_repo:"git@github.com:bussiness/reponame.git"}));
  });
  it("handles DEFAULT", () => {
    const initialState = Map();
    const action = {type:""};
    const nextState = plainHtml(initialState, action);

    expect(nextState).to.equal(fromJS({
    }));
  });
});
