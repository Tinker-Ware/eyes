import { SET_PROJECT_DEPLOYS, SET_PROJECT_DEPLOY_ERROR, SET_PROJECT_SERVERS, SET_SHOW_PROJECT_SERVERS, SET_USER_PROJECT, SET_USER_PROJECTS, SET_USER_PROJECT_DEV_ENVIRONMENT, SET_SHOW_PROJECT_DEPLOY_ERROR, SET_IS_POSTING_PROJECT, SET_IS_DEPLOYING_PROJECT } from "../../constants/Projects";
import { Map } from "immutable";

const initialState = Map({
  isDeployingProject: false,
  isPostingProject: false,
  show_project_servers: false
});

export default function userProject(state = initialState, action) {
  switch (action.type) {
    case SET_USER_PROJECT:
    {
      return state.set("user_project", action.value.get("user_project"));
    }
    case SET_USER_PROJECT_DEV_ENVIRONMENT:
    {
      return state.set("user_project_dev_environment", action.value.get("user_project_dev_environment"));
    }
    case SET_USER_PROJECTS:
    {
      return state.set("user_projects", action.value.get("user_projects"));
    }
    case SET_PROJECT_DEPLOYS:
    {
      return state.set("project_deploys", action.value.get("project_deploys"));
    }
    case SET_PROJECT_DEPLOY_ERROR:
    {
      return state.set("project_deploy_server_error", action.value.get("project_deploy_server_error"));
    }
    case SET_PROJECT_SERVERS:
    {
      return state.set("project_servers", action.value.get("project_servers"));
    }
    case SET_IS_POSTING_PROJECT:
    {
      return state.set("isPostingProject", action.value.get("isPostingProject"));
    }
    case SET_IS_DEPLOYING_PROJECT:
    {
      return state.set("isDeployingProject", action.value.get("isDeployingProject"));
    }
    case SET_SHOW_PROJECT_SERVERS:
    {
      return state.set("show_project_servers", action.value.get("show_project_servers"));
    }
    case SET_SHOW_PROJECT_DEPLOY_ERROR:
    {
      return state.set("show_project_server_error", action.value.get("show_project_server_error"));
    }
    default:
      return state;
  }
}
