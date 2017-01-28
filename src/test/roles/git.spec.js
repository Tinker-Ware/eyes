import {Map, fromJS} from "immutable";
import {expect} from "chai";
import git from "../../reducers/roles/git";

describe("reducer", () => {
  it("handles SET_USER", () => {
    const initialState = Map();
    const action = {type:"SET_USER", value: fromJS({
      user:"user"})};
    const nextState = git(initialState, action);

    expect(nextState).to.equal(fromJS({
      user:"user"}));
  });
  it("handles SET_SSH", () => {
    const initialState = Map();
    const action = {type:"SET_SSH", value: fromJS({
      ssh:"yes"})};
    const nextState = git(initialState, action);

    expect(nextState).to.equal(fromJS({
      ssh:"yes"}));
  });
  it("handles SET_SSH_KEY_PATH", () => {
    const initialState = Map();
    const action = {type:"SET_SSH_KEY_PATH", value: fromJS({
      ssh_key_path:"/home/tinkerware/.ssh/ansible_id_rsa"})};
    const nextState = git(initialState, action);

    expect(nextState).to.equal(fromJS({
      ssh_key_path:"/home/tinkerware/.ssh/ansible_id_rsa"}));
  });
  it("handles SET_USER_EMAIL", () => {
    const initialState = Map();
    const action = {type:"SET_USER_EMAIL", value: fromJS({
      user_email:"user@email.com"})};
    const nextState = git(initialState, action);

    expect(nextState).to.equal(fromJS({
      user_email:"user@email.com"}));
  });
  it("handles SET_USER_NAME", () => {
    const initialState = Map();
    const action = {type:"SET_USER_NAME", value: fromJS({
      user_name:"name"})};
    const nextState = git(initialState, action);

    expect(nextState).to.equal(fromJS({
      user_name:"name"}));
  });
  it("handles DEFAULT", () => {
    const initialState = Map();
    const action = {type:""};
    const nextState = git(initialState, action);

    expect(nextState).to.equal(fromJS({
    }));
  });
});
