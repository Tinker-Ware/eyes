import { Map, fromJS } from "immutable";
import { expect } from "chai";
import projects from "../../reducers/project/projects.js";

describe("reducer", () => {
  it("handles SET_USER_PROJECT", () => {
    const initialState = Map();
    const action = {type:"SET_USER_PROJECT", value: fromJS(
      {
        user_project:{
          "project": [
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
        user_project:
          {
            "project": [
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
  it("handles SET_USER_PROJECT_DEV_ENVIRONMENT", () => {
    const initialState = Map();
    const action = {type:"SET_USER_PROJECT_DEV_ENVIRONMENT", value: fromJS(
      {
        user_project_dev_environment:{
          "development_environments": [
            {
              "project_id": "58a3845cce40ef118c0647c8",
              "path": "tinkerware.io/assets/zAEjKEbogptkEYzlDgOH",
              "id": "58a38463ce40ef118c4ba92f"
            }
          ]
        }
      }
    )};
    const nextState = projects(initialState, action);

    expect(nextState).to.equal(fromJS(
      {
        user_project_dev_environment:
          {
            "development_environments": [
              {
                "project_id": "58a3845cce40ef118c0647c8",
                "path": "tinkerware.io/assets/zAEjKEbogptkEYzlDgOH",
                "id": "58a38463ce40ef118c4ba92f"
              }
            ]
          }
      }
    ));
  });
  it("handles SET_PROJECT_DEPLOY", () => {
    const initialState = Map();
    const action = {type:"SET_PROJECT_DEPLOY", value: fromJS(
      {
        "deploy": {
          "id": "a3hk4lf2g0n1vxny5mninv8fsqwzqf",
          "user_id": 1,
          "project_id": "507f1f77bcf86cd799439011",
          "deployed_at": "2014-04-17T14:00:00.030Z",
          "note": "nightly build",
          "commit": "fc5e502cfc908db401394337548131cc739e777f",
          "status": "Pending"
        }
      }
    )};
    const nextState = projects(initialState, action);

    expect(nextState).to.equal(fromJS(
      {
        deploy:
        {
          "id": "a3hk4lf2g0n1vxny5mninv8fsqwzqf",
          "user_id": 1,
          "project_id": "507f1f77bcf86cd799439011",
          "deployed_at": "2014-04-17T14:00:00.030Z",
          "note": "nightly build",
          "commit": "fc5e502cfc908db401394337548131cc739e777f",
          "status": "Pending"
        }
      }
    ));
  });
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
