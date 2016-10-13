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

export function* doRequestGetRefreshSession(authorization) {
  return yield call(
    doRequest, process.env.HOST + '/api/v1/users/refresh',
    {
      method: 'GET',
      headers: {
        'authorization': 'Bearer ' + authorization
      },
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
    yield put(actions.requestPostProviderKey(fromJS({
        'authorization': userAccess.value.get('authorization'),
        'user_id': userAccess.value.get('oauth_request').toJS().user_id,
        'sshKeys': [],
        'sshKey': {
          'name': 'deploy_key',
          'public_key': 'ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAACAQCtmlfAafr14dY5WPFtZV7GpVwgp6/atw7eonjhWfWZfHFmx2TTpUGUbH4o+Z6VI+9GImcpnk+8S/OLSCIT0ueQ6xxqnP6tdREaSZAMyB0f7vGxnuOv3n/sqyFlio1rzaysQv11AFML2QmxR0mNqjODAkwqDGPvbD1qyUDXT33YW9xRf5TJ7oJ4GnRXVArAvQdTa7tWOYCseQsUSkmsJXzcOkEAGfUkJSrvpss8FlfksVV2M4OL5qeNWMfuqY8sKyTcxCBpbpeBClIx2Z7l9iNxPyTXyo7Ma+65SwPVYCUNM5vRy77miGZhLuZDVwdXqD1VnlTCQhppPUh1R9+IxWMRbomNCxPOJtuj2Q7dB5oY990Heg58yLCv2LdVhY7OM+2lUksBoTrQkpjMMMfPxwU/6l9Eiq4KiX0BIZIPQFbbE33yfaLmKEwOcVBYflS3t/yJAFDUecPC3j488HpY23yMPXiredRaGebbXGiVBKOp6zjftFJzes1PvWmP+XiAq52uGiTH2mzlMrlzd4Jpfegy6uGl4r58LkLJOInl89XWYsxHlzC+1pPhSbmYCJvv//0P4O8afSUgjlRBBfiyOo1+mE9m5BcgEGd6ZbtF7mVAAoqgXx2kSdMglt9+WV0/X+TF/G0QBCpMeBqvrWKTwDDtaWlcEeBE/C5ObIledyKpjw== tinkerwareio@gmail.com'
        }
      })));
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
    if(userSession.user_session.integrations)
      yield call(refreshIntegrations, userSession);
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

export function* refreshSession(userAccess) {
  try {
    const refreshSession = yield call(doRequestGetRefreshSession, userAccess.value.get('authorization'));
    // console.log();
    // yield put(actions.receiveRepositories(fromJS({
    //   repositories: userRepos.repositories
    // })));
  }
  catch(error) {
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
      yield put(actions.receiveRepositoryAccess(fromJS({
          'integration': {
            "provider": "github",
            "username": userSession.user_session.integrations.github
          }
        }))
      );
  }
  catch(error) {
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
