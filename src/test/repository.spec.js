import { Map, fromJS } from "immutable";
import { expect } from "chai";
import repository from "../reducers/repository";

describe("reducer", () => {
  it("handles SET_REPOSITORIES", () => {
    const initialState = Map();
    const action = {type:"SET_REPOSITORIES", value: fromJS({
      repositories: {
        provider:"github",
        repos: ["ghost-blog-site","infrastructure","provisioning-webpage"]
      }})
    };
    const nextState = repository(initialState, action);

    expect(nextState).to.equal(fromJS({
      repositories: {
        provider:"github",
        repos: ["ghost-blog-site","infrastructure","provisioning-webpage"]
      }
    }));
  });
  it("handles SET_REPOSITORY", () => {
    const initialState = Map();
    const action = {type:"SET_REPOSITORY", value: fromJS({
      repository: {
        provider:"github",
        name:"landingpage"}})
    };
    const nextState = repository(initialState, action);

    expect(nextState).to.equal(fromJS({
      repository: {
        provider:"github",
        name:"landingpage"}
    }));
  });
  it("handles SET_INTEGRATION", () => {
    const initialState = Map();
    const action = {type:"SET_INTEGRATION", value: fromJS({
      integration: {
        userName:"tinkerware",
        accessToken:"e72e16c7e42f292c6912e7710c838347ae178b4a"}})
    };
    const nextState = repository(initialState, action);

    expect(nextState).to.equal(fromJS({
      integration: {
        userName:"tinkerware",
        accessToken:"e72e16c7e42f292c6912e7710c838347ae178b4a"}
    }));
  });
  it("handles SET_SHOW_REPOSITORIES", () => {
    const initialState = Map();
    const action = {type:"SET_SHOW_REPOSITORIES", value: fromJS({
      show: true
    })};
    const nextState = repository(initialState, action);

    expect(nextState).to.equal(fromJS({
      show_repositories: true
    }));
  });
  it("handles DEFAULT", () => {
    const initialState = Map();
    const action = {type:""};
    const nextState = repository(initialState, action);

    expect(nextState).to.equal(fromJS({
    }));
  });
});
