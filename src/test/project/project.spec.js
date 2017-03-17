import { Map, fromJS } from "immutable";
import { expect } from "chai";
import projects from "../../reducers/project/projects";

describe("project", () => {
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
  it("handles SET_PROJECT_DEPLOYS", () => {
    const initialState = Map();
    const action = {type:"SET_PROJECT_DEPLOYS", value: fromJS(
      {
        "project_deploys": [
            {
                "id": "5xOQluuygRCrGFn7QcT1zDiS",
                "deploy_id": "a3hk4lf2g0n1vxny5mninv8fsqwzqf",
                "project_id": "507f1f77bcf86cd799439011",
                "ip": "192.168.1.1",
                "operating_system": "debian-8-x64",
                "instance_name": "521mb",
                "region": "nyc1",
                "hostname": "tinkerware.com",
                "status": "not created",
                "provider": "digital_ocean"
            }
        ]
      }
    )};
    const nextState = projects(initialState, action);

    expect(nextState).to.equal(fromJS(
      {
        project_deploys:[
            {
                "id": "5xOQluuygRCrGFn7QcT1zDiS",
                "deploy_id": "a3hk4lf2g0n1vxny5mninv8fsqwzqf",
                "project_id": "507f1f77bcf86cd799439011",
                "ip": "192.168.1.1",
                "operating_system": "debian-8-x64",
                "instance_name": "521mb",
                "region": "nyc1",
                "hostname": "tinkerware.com",
                "status": "not created",
                "provider": "digital_ocean"
            }
        ]
      }
    ));
  });
  it("handles SET_PROJECT_SERVERS", () => {
    const initialState = Map();
    const action = {type:"SET_PROJECT_SERVERS", value: fromJS(
      {
        "project_servers": [
            {
                "id": "5xOQluuygRCrGFn7QcT1zDiS",
                "deploy_id": "a3hk4lf2g0n1vxny5mninv8fsqwzqf",
                "project_id": "507f1f77bcf86cd799439011",
                "ip": "192.168.1.1",
                "operating_system": "debian-8-x64",
                "instance_name": "521mb",
                "region": "nyc1",
                "hostname": "tinkerware.com",
                "status": "not created",
                "provider": "digital_ocean"
            }
        ]
      }
    )};
    const nextState = projects(initialState, action);

    expect(nextState).to.equal(fromJS(
      {
        project_servers:[
            {
                "id": "5xOQluuygRCrGFn7QcT1zDiS",
                "deploy_id": "a3hk4lf2g0n1vxny5mninv8fsqwzqf",
                "project_id": "507f1f77bcf86cd799439011",
                "ip": "192.168.1.1",
                "operating_system": "debian-8-x64",
                "instance_name": "521mb",
                "region": "nyc1",
                "hostname": "tinkerware.com",
                "status": "not created",
                "provider": "digital_ocean"
            }
        ]
      }
    ));
  });
  it("handles SET_SHOW_PROJECT_SERVERS", () => {
    const initialState = Map();
    const action = {type:"SET_SHOW_PROJECT_SERVERS", value: fromJS(
      {
        "show_project_servers": true
      }
    )};
    const nextState = projects(initialState, action);

    expect(nextState).to.equal(fromJS(
      {
        show_project_servers: true
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
