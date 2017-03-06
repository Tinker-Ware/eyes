import * as types from "../../constants/ActionTypes";
import * as projectsActionTypes from "../../constants/Projects";

export function receiveRepositoryAccess(integration){
  return {
    type: types.SET_INTEGRATION,
    value: integration
  };
}

export function receiveRepositories(repositories){
  return{
    type: types.SET_REPOSITORIES,
    value: repositories
  };
}

export function setCloudProviderAccess(cloudProviderAccess){
  return{
    type: types.SET_CLOUD_PROVIDER,
    value: cloudProviderAccess
  };
}

export function setCloudProviderSshKeys(cloudProviderSshKeys){
  return{
    type: types.SET_CLOUD_PROVIDER_SSH_KEY,
    value: cloudProviderSshKeys
  };
}

// export function requestPostUserProjectError(error){
//   return{
//     type: types.REQUEST_POST_USER_PROJECT_FAILED,
//     value: error
//   };
// }

export function setProjectDeploy(ProjectDeploy){
  return{
    type: projectsActionTypes.SET_PROJECT_DEPLOY,
    value: ProjectDeploy
  };
}

export function setUserProject(userProject){
  return{
    type: projectsActionTypes.SET_USER_PROJECT,
    value: userProject
  };
}

export function setUserProjects(userProjects){
  return{
    type: projectsActionTypes.SET_USER_PROJECTS,
    value: userProjects
  };
}

export function setUserProjectDevEnvironment(userProjectDevEnvironment){
  return{
    type: projectsActionTypes.SET_USER_PROJECT_DEV_ENVIRONMENT,
    value: userProjectDevEnvironment
  };
}

export function requestPostProviderKey(cloudProviderSshKey){
  return{
    type: types.REQUEST_POST_CLOUD_PROVIDER_KEY,
    value: cloudProviderSshKey
  };
}

export function requestCloudProviderKeys(userAccess){
  return{
    type: types.REQUEST_CLOUD_PROVIDER_KEYS,
    value: userAccess
  };
}

export function setUser(user){
  return{
    type: types.SET_USER_SESION,
    value: user
  };
}

// export function setUserSesion(userSesion){
//   return{
//     type: types.SET_USER_SESION,
//     value: userSesion
//   };
// }
