import {Map, fromJS} from "immutable";
import {expect} from "chai";
import plainHtml from "../../reducers/roles/plainHtml";

describe("plainHtml role", () => {
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
  it("handles SET_ENABLE_PLAINHTML", () => {
    const initialState = Map();
    const action = {type:"SET_ENABLE_PLAINHTML", value: fromJS({
      enable_plainhtml:true})};
    const nextState = plainHtml(initialState, action);

    expect(nextState).to.equal(fromJS({
      enable_plainhtml:true}));
  });
  it("handles SET_SHOW_PLAINHTML", () => {
    const initialState = Map();
    const action = {type:"SET_SHOW_PLAINHTML", value: fromJS({
      show_plainhtml:true})};
    const nextState = plainHtml(initialState, action);

    expect(nextState).to.equal(fromJS({
      show_plainhtml:true}));
  });
  it("handles SET_REQUEST_ACTIVE_PLAINHTML", () => {
    const initialState = Map();
    const action = {type:"SET_REQUEST_ACTIVE_PLAINHTML", value: fromJS({
      request_active_plainhtml:true})};
    const nextState = plainHtml(initialState, action);

    expect(nextState).to.equal(fromJS({
      request_active_plainhtml:true}));
  });
  it("handles DEFAULT", () => {
    const initialState = Map();
    const action = {type:""};
    const nextState = plainHtml(initialState, action);

    expect(nextState).to.equal(fromJS({
    }));
  });
});
