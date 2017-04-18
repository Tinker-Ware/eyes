import * as types from "../constants/Projects";

export function deployProject(value) {
  return { type: types.REQUEST_DEPLOY_PROJECT, value };
}

export function reDeployProject(value) {
  return { type: types.REQUEST_PROJECT_REDEPLOY, value };
}

export function deleteProjectServer(value) {
  return { type: types.DELETE_PROJECT_SERVERS, value };
}

export function requestGetUserProject(value) {
  return { type: types.REQUEST_USER_PROJECT, value };
}

export function requestGetUserProjects(value) {
  return { type: types.REQUEST_USER_PROJECTS, value };
}

export function requestProjectDeploys(value) {
  return { type: types.REQUEST_PROJECT_DEPLOYS, value };
}

export function requestProjectDeployServers(value) {
  return { type: types.REQUEST_PROJECT_SERVERS, value };
}

export function setUserProject(value) {
  return { type: types.SET_USER_PROJECT, value };
}

export function setProjectDeploys(value) {
  return { type: types.SET_PROJECT_DEPLOYS, value };
}

export function setProjectDeployError(value) {
  return { type: types.SET_PROJECT_DEPLOY_ERROR, value };
}

export function setProjectServers(value) {
  return { type: types.SET_PROJECT_SERVERS, value };
}

export function setShowProjectServers(value) {
  return { type: types.SET_SHOW_PROJECT_SERVERS, value };
}

export function setShowProjectDeployServerError(value) {
  return { type: types.SET_SHOW_PROJECT_DEPLOY_ERROR, value };
}

export function setUserProjectDevEnvironment(value) {
  return { type: types.SET_USER_PROJECT_DEV_ENVIRONMENT, value };
}

export function setUserProjects(value) {
  return { type: types.SET_USER_PROJECTS, value };
}
