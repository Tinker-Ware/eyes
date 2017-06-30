import {Map, fromJS} from "immutable";
import {expect} from "chai";
import spring from "../../reducers/roles/spring";

describe("spring role", () => {
  it("handles SET_ENABLE_SPRING", () => {
    const initialState = Map();
    const action = {type:"SET_ENABLE_SPRING", value: fromJS({
      enable_spring:true})};
    const nextState = spring(initialState, action);

    expect(nextState).to.equal(fromJS({
      enable_spring:true}));
  });
  it("handles DEFAULT", () => {
    const initialState = Map();
    const action = {type:""};
    const nextState = spring(initialState, action);

    expect(nextState).to.equal(fromJS({
    }));
  });
});
