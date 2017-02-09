import { Map, fromJS } from "immutable";
import { expect } from "chai";
import projects from "../../reducers/project/projects.js";

describe("reducer", () => {
  it("handles SET_USER_PROJECTS", () => {
    const initialState = Map();
    const action = {type:"SET_USER_PROJECTS", value: fromJS(
      {
        user_projects:{
          "projects": [
            {
              "id": "507f1f77bcf86cd799439011",
              "user_id": 1,
              "project_name": "tinkerware",
              "application_name": "simple_webpage",
              "server_provider": "digital_ocean",
              "configuration": {
                "a": "a",
                "b": "b"
              },
              "repository": {
                "provider": "github",
                "name": "ghost-blog"
              }
            }
          ]
        }
      }
    )};
    const nextState = projects(initialState, action);

    expect(nextState).to.equal(fromJS(
      {
        user_projects:
          {
            "projects": [
              {
                "id": "507f1f77bcf86cd799439011",
                "user_id": 1,
                "project_name": "tinkerware",
                "application_name": "simple_webpage",
                "server_provider": "digital_ocean",
                "configuration": {
                  "a": "a",
                  "b": "b"
                },
                "repository": {
                  "provider": "github",
                  "name": "ghost-blog"
                }
              }
            ]
          }
      }
    ));
  });
  it("handles DEFAULT", () => {
    const initialState = Map();
    const action = {type:""};
    const nextState = projects(initialState, action);

    expect(nextState).to.equal(fromJS({
    }));
  });
});
