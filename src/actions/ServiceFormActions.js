import * as types from '../constants/ActionTypes';

export function setProjectName(value) {
  return { type: types.SET_PROJECT_NAME, value };
}

export function setServerProvider(value) {
  return { type: types.SET_SERVER_PROVIDER, value };
}

export function setApplication(value) {
  return { type: types.SET_APPLICATION, value };
}

export function setRepositories(value) {
  return { type: types.SET_REPOSITORIES, value };
}

export function setRepository(value) {
  return { type: types.SET_REPOSITORY, value };
}

export function setIntegracion(value){
  return { type: types.SET_INTEGRACION, value };
}

export function setShowRepositories(value){
  return { type: types.SET_SHOW_REPOSITORIES, value };
}

export function requestRepositoryAccess() {
  return { type: types.REQUEST_GITHUB_ACCESS };
}

export function setSSHKey(value) {
  return { type: types.SET_SSH_KEY, value };
}

export function setSSHKeyTitle(value) {
  return { type: types.SET_SSH_KEY_TITLE, value };
}

export function setSSHKeyContent(value) {
  return { type: types.SET_SSH_KEY_CONTENT, value };
}

export function enableSSHKey(value) {
  return { type: types.ENABLE_SSH_KEY, value };
}

export function deleteSSHKey(value) {
  return { type: types.DELETE_SSH_KEY, value };
}