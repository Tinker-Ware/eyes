import {Map, fromJS} from "immutable";
import {expect} from "chai";
import nodejs from "../../reducers/roles/nodejs";

describe("nodejs role", () => {
  it("handles SET_ENABLE_NODEJS", () => {
    const initialState = Map();
    const action = {type:"SET_ENABLE_NODEJS", value: fromJS({
      enable_nodejs:true})};
    const nextState = nodejs(initialState, action);

    expect(nextState).to.equal(fromJS({
      enable_nodejs:true}));
  });
  it("handles DEFAULT", () => {
    const initialState = Map();
    const action = {type:""};
    const nextState = nodejs(initialState, action);

    expect(nextState).to.equal(fromJS({
    }));
  });
});
