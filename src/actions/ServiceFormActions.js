import * as types from '../constants/ActionTypes';

export function clearCloudProviderSSHKeys(value) {
  return { type: types.CLEAR_CLOUD_PROVIDER_SSH_KEYS, value };
}

export function setProjectName(value) {
  return { type: types.SET_PROJECT_NAME, value };
}

export function setCloudProvider(value) {
  return { type: types.SET_CLOUD_PROVIDER, value };
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
  return { type: types.SET_INTEGRATION, value };
}

export function setShowRepositories(value){
  return { type: types.SET_SHOW_REPOSITORIES, value };
}

export function setUser(value){
  return { type: types.SET_USER, value };
}

export function setUserSesion(value){
  return { type: types.SET_USER_SESION, value };
}

export function setUserInfo(value){
  return { type: types.SET_USER_INFORMATION, value };
}

export function requestCloudProviderAccess(value) {
  return { type: types.REQUEST_CLOUD_PROVIDER_ACCESS, value };
}

export function requestPostCloudProviderSSHKey(value) {
  return { type: types.REQUEST_POST_CLOUD_PROVIDER_KEY, value };
}

export function requestPostUserProject(value) {
  return { type: types.REQUEST_POST_USER_PROJECT, value };
}

export function requestRepositoryAccess() {
  return { type: types.REQUEST_GITHUB_ACCESS };
}

export function requestUserRepositories(value) {
  return { type: types.REQUEST_GITHUB_REPOSITORIES, value };
}

export function setSSHKey(value) {
  return { type: types.SET_CLOUD_PROVIDER_SSH_KEY, value };
}

export function setSSHKeyTitle(value) {
  return { type: types.SET_CLOUD_PROVIDER_SSH_KEY_NAME, value };
}

export function setSSHKeyContent(value) {
  return { type: types.SET_CLOUD_PROVIDER_SSH_KEY_PUBLIC_KEY, value };
}

export function showSSHKey(value) {
  return { type: types.SHOW_CLOUD_PROVIDER_SSH_KEY, value };
}

export function enableSSHKey(value) {
  return { type: types.ENABLE_CLOUD_PROVIDER_SSH_KEY, value };
}

export function deleteSSHKey(value) {
  return { type: types.DELETE_CLOUD_PROVIDER_SSH_KEY, value };
}