import {Map, fromJS} from "immutable";
import {expect} from "chai";
import buildbot from "../../reducers/roles/buildbot";

describe("buildbot role", () => {
  it("handles SET_ENABLE_PLAINHTML", () => {
    const initialState = Map();
    const action = {type:"SET_ENABLE_BUILDBOT", value: fromJS({
      enable_buildbot:true})};
    const nextState = buildbot(initialState, action);

    expect(nextState).to.equal(fromJS({
      enable_buildbot:true}));
  });
  it("handles DEFAULT", () => {
    const initialState = Map();
    const action = {type:""};
    const nextState = buildbot(initialState, action);

    expect(nextState).to.equal(fromJS({
    }));
  });
});
