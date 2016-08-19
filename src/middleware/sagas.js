import { takeLatest } from 'redux-saga';
import { call, put, fork } from 'redux-saga/effects';
import { fromJS } from 'immutable';
import 'whatwg-fetch';
import * as actions from './actions/MiddlewareActions';
import * as types from '../constants/ActionTypes';

export const doRequest = (url, options) => {
  return fetch(url, options)
    .then(function(response) {
      if (response.status >= 200 && response.status < 300) {  
        return Promise.resolve(response.json());
      } else {  
        return Promise.reject(new Error(response.statusText));
      }
    })
    .catch(error => error);  
};

export function* doRequestGetCloudProviderAccess() {
  return yield call(
    doRequest, 'http://localhost:3100/api/v1/cloud/do_callback',
    {
      method: 'GET',
      mode: 'cors'
    });
}

export function* doRequestGetCloudProviderKeys(accessToken) {
  return yield call(
    doRequest, 'http://localhost:3100/api/v1/cloud/keys',
    {
      method: 'GET',
      headers: {
        'authorization': 'Bearer qphYSqjEFk1RcFxYqqIIFk4vaBJvDoBr3t9aHTp1JFEAO0NS7ECyLJJyUPybOUNf',
        'provider-token': accessToken
      },
      mode: 'cors'
    });
}

export function* doRequestGetRepositories(username, accessToken) {
  return yield call(
    doRequest, 'http://localhost:3100/api/v1/repository/github/'+ username +'/repos',
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
    doRequest, 'http://localhost:3100/api/v1/repository/gh_callback',
    {
      method: 'GET',
      mode: 'cors'
    });
}

export function* doRequestGetUserSesion(userSesion) {
  return yield call(
    doRequest, 'http://localhost:3100/api/v1/users/login',
    {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'user_sesion': {
          'email': userSesion.toJS().email,
          'password': userSesion.toJS().password
        }
      }),
      mode: 'cors'
    });
}

export function* doRequestPostCloudProviderKey(accessToken, key) {
  return yield call(
    doRequest, 'http://localhost:3100/api/v1/cloud/keys',
    {
      method: 'POST',
      headers: {
        'authorization': 'Bearer qphYSqjEFk1RcFxYqqIIFk4vaBJvDoBr3t9aHTp1JFEAO0NS7ECyLJJyUPybOUNf',
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
    doRequest, 'http://localhost:3100/api/v1/users',
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

export function* getCloudProviderAccess() {
  const cloudProviderAccess = yield call(doRequestGetCloudProviderAccess);
  yield put(actions.setCloudProviderAccess(fromJS({
      cloud_provider: cloudProviderAccess.cloud_provider
    }))
  );
  yield put(actions.requestCloudProviderSSHKeys(fromJS({
      'access_token': cloudProviderAccess.cloud_provider.access_token
    }
  )));
}

export function* getCloudProviderKeys(userAccess) {
  const cloudProviderKeys = yield call(doRequestGetCloudProviderKeys, userAccess.value.get('access_token'));
  yield put(actions.setCloudProviderSshKeys(fromJS({
    sshKeys: [],
    sshKey: cloudProviderKeys.keys
  })));
}

export function* getRepositoryAccess() {
  const userAccess = yield call(doRequestGetRepositoryAccess);
  yield put(actions.receiveRepository(fromJS({
      integration: userAccess.user
    }))
  );
}

export function* getUserSesion(userLogin) {
  const userSesion = yield call(doRequestGetUserSesion, userLogin.value.get('user_sesion'));
  yield put(actions.setUserSesion(fromJS({
      user_sesion: userSesion.user_sesion
    }))
  );
}

export function* getUserRepositories(userAccess) {
  const userRepos = yield call(doRequestGetRepositories, userAccess.value.get('userName'), userAccess.value.get('accessToken'));
  yield put(actions.receiveRepositories(fromJS({
    repositories: userRepos.repositories
  })));
}

export function* postCloudProviderKey(cloudProviderKeys) {
  const cloudProviderKey = yield call(doRequestPostCloudProviderKey, cloudProviderKeys.value.get('access_token'), cloudProviderKeys.value.get('sshKey'));
  yield put(actions.setCloudProviderSshKeys(fromJS({
    'sshKeys': cloudProviderKeys.value.get('sshKeys'),
    'sshKey': [cloudProviderKey.key]
  })));
}

export function* postUser(user) {
  const userSignup = yield call(doRequestPostUser, user.value.get('user_signup'));
  yield put(actions.setUser(fromJS({
    'user_sesion': userSignup.user_sesion,
  })));
}

export default function* root() {
  yield[
    takeLatest(types.REQUEST_GITHUB_ACCESS, getRepositoryAccess),
    takeLatest(types.REQUEST_GITHUB_REPOSITORIES, getUserRepositories),
    takeLatest(types.REQUEST_CLOUD_PROVIDER_ACCESS, getCloudProviderAccess),
    takeLatest(types.REQUEST_CLOUD_PROVIDER_KEYS, getCloudProviderKeys),
    takeLatest(types.REQUEST_POST_CLOUD_PROVIDER_KEY, postCloudProviderKey),
    takeLatest(types.REQUEST_POST_USER, postUser),
    takeLatest(types.REQUEST_USER_SESION, getUserSesion)
  ];
}