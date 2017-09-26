import {Map, fromJS} from "immutable";
import {expect} from "chai";
import mongodb from "../../reducers/roles/mongodb";

describe("mongodb role", () => {
  it("handles SET_ENABLE_MONGODB", () => {
    const initialState = Map();
    const action = {type:"SET_ENABLE_MONGODB", value: fromJS({
      enable_mongodb:true})};
    const nextState = mongodb(initialState, action);

    expect(nextState).to.equal(fromJS({
      enable_mongodb:true}));
  });
  it("handles DEFAULT", () => {
    const initialState = Map();
    const action = {type:""};
    const nextState = mongodb(initialState, action);

    expect(nextState).to.equal(fromJS({
    }));
  });
});
