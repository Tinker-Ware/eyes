import {Map, fromJS} from "immutable";
import {expect} from "chai";
import spark from "../../reducers/roles/spark";

describe("spark role", () => {
  it("handles SET_ENABLE_SPARK", () => {
    const initialState = Map();
    const action = {type:"SET_ENABLE_SPARK", value: fromJS({
      enable_spark:true})};
    const nextState = spark(initialState, action);

    expect(nextState).to.equal(fromJS({
      enable_spark:true}));
  });
  it("handles DEFAULT", () => {
    const initialState = Map();
    const action = {type:""};
    const nextState = spark(initialState, action);

    expect(nextState).to.equal(fromJS({
    }));
  });
});
