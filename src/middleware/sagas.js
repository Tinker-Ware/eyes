import { takeLatest } from 'redux-saga';
import { call, put, fork } from 'redux-saga/effects';
import { fromJS } from 'immutable';
import 'whatwg-fetch';
import * as actions from './actions/MiddlewareActions';
import * as types from '../constants/ActionTypes';
import cookie from 'react-cookie';

/* eslint-disable no-empty */

export const doRequest = (url, options) => {
  return fetch(url, options)
    .then(function(response) {
      if (response.status >= 200 && response.status < 300) {
        return Promise.resolve(response.json());
      } else {
        return Promise.reject(new Error(response.statusText));
      }
    });
};

export function* doRequestGetCloudProviderAccess() {
  return yield call(
    doRequest, process.env.HOST + '/api/v1/cloud/do_callback',
    {
      method: 'GET',
      mode: 'cors'
    });
}

export function* doRequestGetCloudProviderKeys(accessToken, authorization) {
  return yield call(
    doRequest, process.env.HOST + '/api/v1/cloud/keys',
    {
      method: 'GET',
      headers: {
        'authorization': 'Bearer ' + authorization,
        'provider-token': accessToken
      },
      mode: 'cors'
    });
}

export function* doRequestGetRepositories(username, accessToken) {
  return yield call(
    doRequest, process.env.HOST + '/api/v1/repository/github/'+ username +'/repos',
    {
      method: 'GET',
      headers: {
        'authorization': 'Bearer qphYSqjEFk1RcFxYqqIIFk4vaBJvDoBr3t9aHTp1JFEAO0NS7ECyLJJyUPybOUNf',
        'provider-token': accessToken
      },
      mode: 'cors'
    });
}

export function* doRequestGetRepositoryAccess() {
  return yield call(
    doRequest, process.env.HOST + '/api/v1/repository/gh_callback',
    {
      method: 'GET',
      mode: 'cors'
    });
}

export function* doRequestGetUserSesion(userSesion) {
  return yield call(
    doRequest, process.env.HOST + '/api/v1/users/login',
    {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'user': {
          'email': userSesion.toJS().email,
          'password': userSesion.toJS().password
        }
      }),
      mode: 'cors'
    });
}

export function* doRequestPostCloudProviderKey(accessToken, authorization, key) {
  return yield call(
    doRequest, process.env.HOST + '/api/v1/cloud/keys',
    {
      method: 'POST',
      headers: {
        'authorization': 'Bearer ' + authorization,
        'provider-token': accessToken,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'key': key
      }),
      mode: 'cors'
    });
}

export function* doRequestPostUser(userSignup) {
  return yield call(
    doRequest, process.env.HOST + '/api/v1/users',
    {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'user': {
          "email": userSignup.toJS().email,
          "password": userSignup.toJS().password,
        }
      }),
      mode: 'cors'
    });
}

export function* doRequestPostUserProject(userProject, authorization) {
  return yield call(
    doRequest, process.env.HOST + '/api/v1/project',
    {
      method: 'POST',
      headers: {
        'authorization': 'Bearer ' + authorization,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'project': userProject.toJS()
      }),
      mode: 'cors'
    });
}

export function* getCloudProviderAccess(userAccess) {
  try {
    const cloudProviderAccess = yield call(doRequestGetCloudProviderAccess);
    yield put(actions.setCloudProviderAccess(fromJS({
        cloud_provider: cloudProviderAccess.cloud_provider
      }))
    );
    yield put(actions.requestCloudProviderSSHKeys(fromJS({
        'access_token': cloudProviderAccess.cloud_provider.access_token,
        'authorization': userAccess.value.get('authorization')
      }
    )));
  }
  catch(error) {
  }
}

export function* getCloudProviderKeys(userAccess) {
  try {
    const cloudProviderKeys = yield call(doRequestGetCloudProviderKeys, userAccess.value.get('access_token'), userAccess.value.get('authorization'));
    yield put(actions.setCloudProviderSshKeys(fromJS({
      sshKeys: [],
      sshKey: cloudProviderKeys.keys
    })));
  }
  catch(error) {
  }
}

export function* getRepositoryAccess() {
  try {
    const userAccess = yield call(doRequestGetRepositoryAccess);
    yield put(actions.receiveRepository(fromJS({
        integration: userAccess.user
      }))
    );
  }
  catch(error) {
  }
}

export function* getUserSesion(userLogin) {
  try {
    const userSession = yield call(doRequestGetUserSesion, userLogin.value.get('user_session'));
    cookie.save('user_session', userSession.user_session);
    cookie.load('user_session');
    yield put(actions.setUserSesion(fromJS({
        user_session: userSession.user_session
      }))
    );
  }
  catch(error) {
  }
}

export function* getUserRepositories(userAccess) {
  try {
    const userRepos = yield call(doRequestGetRepositories, userAccess.value.get('userName'), userAccess.value.get('accessToken'));
    yield put(actions.receiveRepositories(fromJS({
      repositories: userRepos.repositories
    })));
  }
  catch(error) {
  }
}

export function* postCloudProviderKey(cloudProviderKeys) {
  try {
    const cloudProviderKey = yield call(doRequestPostCloudProviderKey, cloudProviderKeys.value.get('access_token'), cloudProviderKeys.value.get('authorization'), cloudProviderKeys.value.get('sshKey'));
    yield put(actions.setCloudProviderSshKeys(fromJS({
      'sshKeys': cloudProviderKeys.value.get('sshKeys'),
      'sshKey': [cloudProviderKey.key]
    })));
  }
  catch(error) {
  }
}

export function* postUser(user) {
  try {
    const userSignup = yield call(doRequestPostUser, user.value.get('user_signup'));
    cookie.save('user_session', userSignup.user_session);
    yield put(actions.setUser(fromJS({
      'user_session': userSignup.user_session,
    })));
  }
  catch(error) {
  }
}

export function* postUserProject(project) {
  try {
    yield call(doRequestPostUserProject, project.value.get('user_project'), project.value.get('authorization'));
  }
  catch(error) {
    // yield put(actions.requestPostUserProjectError(fromJS({
    //   'error': error,
    // })));
  }
}

export default function* root() {
  yield[
    takeLatest(types.REQUEST_GITHUB_ACCESS, getRepositoryAccess),
    takeLatest(types.REQUEST_GITHUB_REPOSITORIES, getUserRepositories),
    takeLatest(types.REQUEST_CLOUD_PROVIDER_ACCESS, getCloudProviderAccess),
    takeLatest(types.REQUEST_CLOUD_PROVIDER_KEYS, getCloudProviderKeys),
    takeLatest(types.REQUEST_POST_CLOUD_PROVIDER_KEY, postCloudProviderKey),
    takeLatest(types.REQUEST_POST_USER, postUser),
    takeLatest(types.REQUEST_USER_SESION, getUserSesion),
    takeLatest(types.REQUEST_POST_USER_PROJECT, postUserProject)
  ];
}