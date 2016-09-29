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

export function* doRequestGetCloudProviderAccess(authorization, userAccess) {
  return yield call(
    doRequest, process.env.HOST + '/api/v1/cloud/digital_ocean/oauth',
    {
      method: 'POST',
      headers: {
        'authorization': 'Bearer ' + authorization,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'oauth_request': {
          'user_id': userAccess.toJS().user_id,
          'code': userAccess.toJS().code
        }
      }),
      mode: 'cors'
    });
}

export function* doRequestGetCloudProviderKeys(authorization, user_id) {
  return yield call(
    doRequest, process.env.HOST + '/api/v1/users/'+user_id+'/ssh_keys',
    {
      method: 'GET',
      headers: {
        'authorization': 'Bearer ' + authorization
      },
      mode: 'cors'
    });
}

export function* doRequestGetRepositories(username, authorization) {
  return yield call(
    doRequest, process.env.HOST + '/api/v1/repository/github/'+ username +'/repos',
    {
      method: 'GET',
      headers: {
        'authorization': 'Bearer ' + authorization
      },
      mode: 'cors'
    });
}

export function* doRequestGetRepositoryAccess(authorization, userAccess) {
  return yield call(
    doRequest, process.env.HOST + '/api/v1/repository/github/oauth',
    {
      method: 'POST',
      headers: {
        'authorization': 'Bearer ' + authorization,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'oauth_request': {
          'user_id': userAccess.toJS().user_id,
          'code': userAccess.toJS().code,
          'state': userAccess.toJS().state
        }
      }),
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

export function* doRequestPostCloudProviderKey(authorization, user_id, key) {
  return yield call(
    doRequest, process.env.HOST + '/api/v1/users/'+user_id+'/ssh_keys',
    {
      method: 'POST',
      headers: {
        'authorization': 'Bearer ' + authorization,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'ssh_key': {
          'user_id': user_id,
          'key': key.toJS().public_key,
          'title': key.toJS().name
        }
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
    const cloudProviderAccess = yield call(doRequestGetCloudProviderAccess, userAccess.value.get('authorization'), userAccess.value.get('oauth_request'));
    yield put(actions.setCloudProviderAccess(fromJS({
        cloud_provider: cloudProviderAccess.callback
      }))
    );
    yield put(actions.requestCloudProviderKeys(fromJS({
        authorization: userAccess.value.get('authorization'),
        user_id: userAccess.value.get('oauth_request').get('user_id')
      })));
  }
  catch(error) {
  }
}

export function* getCloudProviderKeys(userAccess) {
  try {
    const cloudProviderKeys = yield call(doRequestGetCloudProviderKeys, userAccess.value.get('authorization'), userAccess.value.get('user_id'));
    yield put(actions.setCloudProviderSshKeys(fromJS({
      sshKeys: [],
      sshKey: cloudProviderKeys.ssh_keys
    })));
  }
  catch(error) {
  }
}

export function* getRepositoryAccess(userAccess) {
  try {
    const repositoryAccess = yield call(doRequestGetRepositoryAccess, userAccess.value.get('authorization'), userAccess.value.get('oauth_request'));
    yield put(actions.receiveRepositoryAccess(fromJS({
        'integration': repositoryAccess.callback
      }))
    );
  }
  catch(error) {
  }
}

export function* getUserSesion(userLogin) {
  try {
    const userSession = yield call(doRequestGetUserSesion, userLogin.value.get('user_session'));
    cookie.save('user_session', userSession.user_session, { path: '/' });
    yield put(actions.setUser(fromJS({
      'user_session': userSession.user_session,
    })));
  }
  catch(error) {
  }
}

export function* getUserRepositories(userAccess) {
  try {
    const userRepos = yield call(doRequestGetRepositories, userAccess.value.get('userName'), userAccess.value.get('authorization'));
    yield put(actions.receiveRepositories(fromJS({
      repositories: userRepos.repositories
    })));
  }
  catch(error) {
  }
}

export function* postCloudProviderKey(cloudProviderKeys) {
  try {
    const cloudProviderKey = yield call(doRequestPostCloudProviderKey, cloudProviderKeys.value.get('authorization'), cloudProviderKeys.value.get('user_id'),  cloudProviderKeys.value.get('sshKey'));
    yield put(actions.setCloudProviderSshKeys(fromJS({
      'sshKeys': cloudProviderKeys.value.get('sshKeys'),
      'sshKey': [cloudProviderKey.ssh_key]
    })));
  }
  catch(error) {
  }
}

export function* postUser(user) {
  try {
    const userSignup = yield call(doRequestPostUser, user.value.get('user_signup'));
    cookie.save('user_session', userSignup.user_session, { path: '/' });
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
