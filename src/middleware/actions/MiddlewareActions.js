import * as types from "../../constants/ActionTypes";
import * as applicationTypes from "../../constants/ApplicationActionTypes";
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

export function setProjectDeploys(ProjectDeploys){
  return{
    type: projectsActionTypes.SET_PROJECT_DEPLOYS,
    value: ProjectDeploys
  };
}

export function setProjectServers(ProjectServers){
  return{
    type: projectsActionTypes.SET_PROJECT_SERVERS,
    value: ProjectServers
  };
}

export function setShowProjectServers(show){
  return{
    type: projectsActionTypes.SET_SHOW_PROJECT_SERVERS,
    value: show
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

export function setNotification(notification){
  return{
    type: applicationTypes.SET_NOTIFICATION,
    value: notification
  };
}

// export function setUserSesion(userSesion){
//   return{
//     type: types.SET_USER_SESION,
//     value: userSesion
//   };
// }
