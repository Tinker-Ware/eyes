import { takeLatest } from 'redux-saga';
import { call, put, fork } from 'redux-saga/effects';
import { fromJS } from 'immutable';
import 'whatwg-fetch';
import * as actions from './actions/MiddlewareActions';
import * as types from '../constants/ActionTypes';

export function doRequest(url, options){
  return fetch(url, options)
    .then(function(response) {
      if (response.status >= 200 && response.status < 300) {  
        return Promise.resolve(response.json());
      } else {  
        return Promise.reject(new Error(response.statusText));
      } 
    })
    .catch(error => error);  
}

export function* getRepositoryAccess() {
  const userAccess = yield call(doRequestGetRepositoryAccess);
  yield put(actions.receiveRepository(fromJS({
      integration: userAccess.user
    }))
  );
}

export function* getUserRepositories(user) {
  const userRepos = yield call(doRequestGetRepositories, user.value.get('userName'), user.value.get('accessToken'));
  yield put(actions.receiveRepositories(fromJS({
    repositories: userRepos.repositories
  })));
}

export function* doRequestGetRepositoryAccess() {
  return yield call(
    doRequest, 'http://localhost:3100/api/v1/repository/gh_callback',
    {
      method: 'GET',
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

export default function* root() {
  yield[
    takeLatest(types.REQUEST_GITHUB_ACCESS, getRepositoryAccess),
    takeLatest(types.REQUEST_GITHUB_REPOSITORIES, getUserRepositories)
  ];
}