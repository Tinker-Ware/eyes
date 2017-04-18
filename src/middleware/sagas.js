import "whatwg-fetch";
import { call, put, takeLatest } from "redux-saga/effects";
import { fromJS } from "immutable";
import {browserHistory} from "react-router";
import * as actions from "./actions/MiddlewareActions";
import * as projectsActionTypes from "../constants/Projects";
import * as types from "../constants/ActionTypes";
import cookie from "react-cookie";

/* eslint-disable no-empty */

export const doRequest = (url, options) => {
  return fetch(url, options)
    .then(response => {
      if (!response.ok) throw response.statusText;
      return response.json();
    })
    .then(response => Promise.resolve(response))
    .catch(error => Promise.reject(error));
};

export function delay(millis) {
  const promise = new Promise(resolve => {
    setTimeout(() => resolve(true), millis);
  });
  return promise;
}

function fibonacci(num) {
  if (num <= 1) return 1;
  return fibonacci(num - 1) + fibonacci(num - 2);
}

export function* doRequestDeleteProjectServer(data) {
  return yield call(
    doRequest, process.env.HOST +"/api/v1/project/"+data.get("project_id")+"/deploys/"+data.get("deploy_id")+"/servers/"+data.get("server_id"),
    {
      method:"DELETE",
      headers: {
        "authorization":"Bearer "+ data.get("authorization")
      },
      mode:"cors"});
}

export function* doRequestDeployProject(data) {
  return yield call(
    doRequest, process.env.HOST +"/api/v1/project/"+data.get("project_id")+"/deploys",
    {
      method:"POST",
      headers: {
        "authorization":"Bearer "+ data.get("authorization"),
        "Accept":"application/json","Content-Type":"application/json"
      },
      body: JSON.stringify({
        "deploy": {
          "user_id": data.get("user_id"),
          "project_id": data.get("project_id")
        }
      }),
      mode:"cors"});
}

export function* doRequestGetCloudProviderAccess(authorization, userAccess) {
  return yield call(
    doRequest, process.env.HOST +"/api/v1/cloud/digital_ocean/oauth",
    {
      method:"POST",
      headers: {"authorization":"Bearer "+ authorization,"Accept":"application/json","Content-Type":"application/json"},
      body: JSON.stringify({"oauth_request": {"user_id": userAccess.toJS().user_id,"code": userAccess.toJS().code
        }
      }),
      mode:"cors"});
}

export function* doRequestGetCloudProviderKeys(authorization, user_id) {
  return yield call(
    doRequest, process.env.HOST +"/api/v1/users/"+user_id+"/ssh_keys",
    {
      method:"GET",
      headers: {"authorization":"Bearer "+ authorization
      },
      mode:"cors"});
}

export function* doRequestGetProjectDeploys(data) {
  return yield call(
    doRequest, process.env.HOST +"/api/v1/project/"+data.get("project_id")+"/deploys",
    {
      method:"GET",
      headers: {
        "authorization":"Bearer "+ data.get("authorization")
      },
      mode:"cors"});
}

export function* doRequestGetProjectServers(data) {
  return yield call(
    doRequest, process.env.HOST +"/api/v1/project/"+data.get("project_id")+"/deploys/"+data.get("deploy_id")+"/servers",
    {
      method:"GET",
      headers: {
        "authorization":"Bearer "+ data.get("authorization")
      },
      mode:"cors"});
}

export function* doRequestGetRepositories(username, authorization) {
  return yield call(
    doRequest, process.env.HOST +"/api/v1/repository/github/"+ username +"/repos",
    {
      method:"GET",
      headers: {"authorization":"Bearer "+ authorization
      },
      mode:"cors"});
}

export function* doRequestGetRepositoryAccess(authorization, userAccess) {
  return yield call(
    doRequest, process.env.HOST +"/api/v1/repository/github/oauth",
    {
      method:"POST",
      headers: {"authorization":"Bearer "+ authorization,"Accept":"application/json","Content-Type":"application/json"},
      body: JSON.stringify({"oauth_request": {"user_id": userAccess.toJS().user_id,"code": userAccess.toJS().code,"state": userAccess.toJS().state
        }
      }),
      mode:"cors"});
}

export function* doRequestGetUserSesion(userSesion) {
  return yield call(
    doRequest, process.env.HOST +"/api/v1/users/login",
    {
      method:"POST",
      headers: {"Accept":"application/json","Content-Type":"application/json"},
      body: JSON.stringify({"user": {"email": userSesion.toJS().email,"password": userSesion.toJS().password
        }
      }),
      mode:"cors"});
}

export function* doRequestGetRefreshSession(authorization) {
  return yield call(
    doRequest, process.env.HOST +"/api/v1/users/refresh",
    {
      method:"GET",
      headers: {"authorization":"Bearer "+ authorization
      },
      mode:"cors"});
}

export function* doRequestGetUserProjectDevEnvironment(authorization, id) {
  return yield call(
    doRequest, process.env.HOST +"/api/v1/project/"+id+"/dev_environment",
    {
      method:"GET",
      headers: {"authorization":"Bearer "+ authorization
      },
      mode:"cors"});
}

export function* doRequestGetUserProject(authorization, id) {
  return yield call(
    doRequest, process.env.HOST +"/api/v1/project/"+id,
    {
      method:"GET",
      headers: {"authorization":"Bearer "+ authorization
      },
      mode:"cors"});
}

export function* doRequestGetUserProjects(authorization) {
  return yield call(
    doRequest, process.env.HOST +"/api/v1/project",
    {
      method:"GET",
      headers: {"authorization":"Bearer "+ authorization
      },
      mode:"cors"});
}

export function* doRequestPostCloudProviderKey(data) {
  return yield call(
    doRequest, process.env.HOST +"/api/v1/users/"+data.get("user_id")+"/ssh_keys",
    {
      method:"POST",
      headers: {"authorization":"Bearer "+ data.get("authorization"),"Content-Type":"application/json"},
      body: JSON.stringify({
        "ssh_key": {
          "user_id": data.get("user_id"),
          "key": data.get("sshKeys").toJS().public_key,
          "title": data.get("sshKeys").toJS().name
        }
      }),
      mode:"cors"});
}

export function* doRequestPostUser(userSignup) {
  return yield call(
    doRequest, process.env.HOST +"/api/v1/users",
    {
      method:"POST",
      headers: {"Accept":"application/json","Content-Type":"application/json"},
      body: JSON.stringify({"user": {
          "email": userSignup.toJS().email,
          "password": userSignup.toJS().password,
        }
      }),
      mode:"cors"});
}

export function* doRequestPostUserProject(userProject, authorization) {
  return yield call(
    doRequest, process.env.HOST +"/api/v1/project",
    {
      method:"POST",
      headers: {"authorization":"Bearer "+ authorization,"Content-Type":"application/json"},
      body: JSON.stringify({"project": userProject.toJS()
      }),
      mode:"cors"});
}

export function* setNotification(notification) {
  yield put(actions.setNotification(fromJS({
    notification: notification
  })));
}

export function* deleteProjectServer(data) {
  try {
    yield call(doRequestDeleteProjectServer, data.value);
    debugger;
    yield call(setNotification, "Server Deleted");
  }
  catch(error) {
    debugger;
    yield call(setNotification, error);
  }
}

export function* deployProject(data) {
  try{
    const deploy = yield call(doRequestDeployProject, data.value);
    yield[
      call(getProjectDeployServers, {
        "value":
          fromJS({
            "authorization": data.value.get("authorization"),
            "project_id": data.value.get("project_id"),
            "user_id": data.value.get("user_id"),
            "deploy_id": deploy.deploy.id
          })
      }),
      call(setNotification, "Creating Server"),
      put(actions.setShowProjectServers(fromJS({"show_project_servers": true})))
    ];
    yield call(getProjectDeploys, data);
  }
  catch(error) {
    yield call(setNotification, error);
  }
}

export function* getCloudProviderAccess(userAccess) {
  try {
    const cloudProviderAccess = yield call(doRequestGetCloudProviderAccess, userAccess.value.get("authorization"), userAccess.value.get("oauth_request"));
    yield [
      put(actions.setCloudProviderAccess(fromJS({
          cloud_provider: cloudProviderAccess.callback
        }))
      ),
      call(setNotification, "Connected With DigitalOcean")
    ];
    yield put(actions.requestCloudProviderKeys(fromJS({
      authorization: userAccess.value.get("authorization"),
      user_id: userAccess.value.get("oauth_request").get("user_id")
    })));
  }
  catch(error) {
    yield call(setNotification, error);
  }
}

export function* getCloudProviderKeys(userAccess) {
  try {
    const cloudProviderKeys = yield call(doRequestGetCloudProviderKeys, userAccess.value.get("authorization"), userAccess.value.get("user_id"));
    yield put(actions.setCloudProviderSshKeys(fromJS({
      sshKeys: [],
      sshKey: cloudProviderKeys.ssh_keys
    })));
  }
  catch(error) {
    yield call(setNotification, error);
  }
}

export function* getProjectDeploys(data) {
  try {
    let time = 0;
    while (time < 30) {
      const project_deploys = yield call(doRequestGetProjectDeploys, data.value);
      yield put(actions.setProjectDeploys(fromJS({
          project_deploys: project_deploys.deploys
        }))
      );
      yield call(delay, 20000);
      time++;
    }
  }
  catch(error) {
    yield call(setNotification, error);
  }
}

export function* getProjectDeployServers(data) {
  try {
    let time = 3;
    while (time < 15) {
      const project_servers = yield call(doRequestGetProjectServers, data.value);
      yield put(actions.setProjectServers(fromJS({
          project_servers: project_servers.servers
        }))
      );
      yield call(delay, fibonacci(time)*1000);
      time++;
    }
  }
  catch(error) {
    yield call(setNotification, error);
  }
}

export function* getRepositoryAccess(userAccess) {
  try {
    const repositoryAccess = yield call(doRequestGetRepositoryAccess, userAccess.value.get("authorization"), userAccess.value.get("oauth_request"));
    yield [
      put(actions.receiveRepositoryAccess(
        fromJS({
          "integration": repositoryAccess.callback
        })
      )),
      call(setNotification, "Connected With Github")
    ];
  }
  catch(error) {
    yield call(setNotification, error);
  }
}

export function* getUserProject(userAccess) {
  try {
    const userProject = yield call(doRequestGetUserProject, userAccess.value.get("authorization"), userAccess.value.get("projectId"));
    yield put(actions.setUserProject(fromJS({
        user_project: userProject.project
      }))
    );
    let userProjectDevEnvironment = {"development_environments":[]};
    let time = 3;
    while (time == 12 || userProjectDevEnvironment.development_environments.length == 0) {
      yield call(delay, fibonacci(time)*1000);
      userProjectDevEnvironment = yield call(doRequestGetUserProjectDevEnvironment, userAccess.value.get("authorization"), userAccess.value.get("projectId"));
      time++;
    }
    yield put(actions.setUserProjectDevEnvironment(fromJS({
        user_project_dev_environment: userProjectDevEnvironment.development_environments
      })
    ));
  }
  catch(error) {
    yield call(setNotification, error);
  }
}

export function* getUserProjects(userAccess) {
  try {
    const userProjects = yield call(doRequestGetUserProjects, userAccess.value.get("authorization"));
    yield put(actions.setUserProjects(fromJS({
        user_projects: userProjects.projects
      }))
    );
  }
  catch(error) {
    yield call(setNotification, error);
  }
}

export function* getUserSesion(userLogin) {
  try {
    const userSession = yield call(doRequestGetUserSesion, userLogin.value.get("user_session"));
    yield call(refreshUserSesion, userSession);
    yield call(setNotification, "Welcome Back");
  }
  catch(error) {
    yield call(setNotification, error);
  }
}

export function* getUserRepositories(userAccess) {
  try {
    const userRepos = yield call(doRequestGetRepositories, userAccess.value.get("userName"), userAccess.value.get("authorization"));
    yield put(actions.receiveRepositories(fromJS({
      repositories: userRepos.repositories
    })));
  }
  catch(error) {
    yield call(setNotification, error);
  }
}

export function* postCloudProviderKey(cloudProviderKeys) {
  try {
    const cloudProviderKey = yield call(doRequestPostCloudProviderKey, cloudProviderKeys.value);
    yield [
      put(actions.setCloudProviderSshKeys(
        fromJS({
          "sshKeys": cloudProviderKeys.value.get("sshKeys"),
          "sshKey": [cloudProviderKey.ssh_key]
        })
      )),
      call(setNotification, "SSHKey Added")
    ];
  }
  catch(error) {
    yield call(setNotification, error);
  }
}

export function* postUser(user) {
  try {
    const userSignup = yield call(doRequestPostUser, user.value.get("user_signup"));
    cookie.save("user_session", userSignup.user_session, { path:"/"});
    yield put(actions.setUser(fromJS({"user_session": userSignup.user_session,
    })));
    yield call(setNotification, "Welcome to MyDevop");
  }
  catch(error) {
    yield call(setNotification, error);
  }
}

export function* postUserProject(project) {
  try {
    const userProject = yield call(doRequestPostUserProject, project.value.get("user_project"), project.value.get("authorization"));
    browserHistory.push("/project/"+userProject.project.id);
    yield call(setNotification, "Project Created");
  }
  catch(error) {
    yield call(setNotification, error);
  }
}

export function* refreshSession(userAccess) {
  try {
    const userSession = yield call(doRequestGetRefreshSession, userAccess.value.get("authorization"));
    yield call(refreshUserSesion, userSession);
  }
  catch(error) {
    yield call(setNotification, error);
  }
}

export function* refreshUserSesion(userSession) {
  try {
    if(userSession.user_session.integrations)
      yield call(refreshIntegrations, userSession);
    cookie.save("user_session", userSession.user_session, { path:"/"});
    yield put(actions.setUser(fromJS({"user_session": userSession.user_session,
    })));
  }
  catch(error) {
    yield call(setNotification, error);
  }
}

export function* refreshIntegrations(userSession) {
  try {
    if(userSession.user_session.integrations.digital_ocean){
      yield put(actions.setCloudProviderAccess(fromJS({
          cloud_provider: {
            "provider": "digital_ocean",
            "username": userSession.user_session.integrations.digital_ocean
          }
        }))
      );
      yield put(actions.requestCloudProviderKeys(fromJS({
          authorization: userSession.user_session.token,
          user_id: userSession.user_session.id
        })));
    }
    if(userSession.user_session.integrations.github)
      yield put(actions.receiveRepositoryAccess(fromJS({"integration": {
            "provider": "github",
            "username": userSession.user_session.integrations.github
          }
        }))
      );
  }
  catch(error) {
    yield call(setNotification, error);
  }
}

export default function* root() {
  yield[
    takeLatest(projectsActionTypes.DELETE_PROJECT_SERVERS, deleteProjectServer),
    takeLatest(projectsActionTypes.REQUEST_DEPLOY_PROJECT, deployProject),
    takeLatest(projectsActionTypes.REQUEST_PROJECT_DEPLOYS, getProjectDeploys),
    takeLatest(projectsActionTypes.REQUEST_PROJECT_SERVERS, getProjectDeployServers),
    takeLatest(projectsActionTypes.REQUEST_USER_PROJECT, getUserProject),
    takeLatest(projectsActionTypes.REQUEST_USER_PROJECTS, getUserProjects),
    takeLatest(types.REQUEST_CLOUD_PROVIDER_ACCESS, getCloudProviderAccess),
    takeLatest(types.REQUEST_CLOUD_PROVIDER_KEYS, getCloudProviderKeys),
    takeLatest(types.REQUEST_GITHUB_ACCESS, getRepositoryAccess),
    takeLatest(types.REQUEST_GITHUB_REPOSITORIES, getUserRepositories),
    takeLatest(types.REQUEST_POST_CLOUD_PROVIDER_KEY, postCloudProviderKey),
    takeLatest(types.REQUEST_POST_USER_PROJECT, postUserProject),
    takeLatest(types.REQUEST_POST_USER, postUser),
    takeLatest(types.REQUEST_REFRESH_USER_SESSION, refreshSession),
    takeLatest(types.REQUEST_USER_SESION, getUserSesion)
  ];
}
