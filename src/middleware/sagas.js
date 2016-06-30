import 'whatwg-fetch';
import { takeLatest } from 'redux-saga';
import { call, put, fork } from 'redux-saga/effects';
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
  const userAccessToken = yield call(
    doRequest, 'http://localhost:3100/api/v1/repository/gh_callback',
    {
      method: 'GET',
      mode: 'cors'
    });
  yield put(actions.receiveRepository(userAccessToken.user.access_token));
  const userRepos = yield call(getRepositories);
  yield put(actions.receiveRepositories(userRepos));
  yield put(actions.showRepositories(true));
}

export function* getRepositories() {
  return yield call(
    doRequest, 'http://localhost:3100/api/v1/repository/github/tinkerware/repos',
    {
      method: 'GET',
      headers: {
        'authorization': 'Bearer qphYSqjEFk1RcFxYqqIIFk4vaBJvDoBr3t9aHTp1JFEAO0NS7ECyLJJyUPybOUNf',
        'provider-token': '77e027c7447f468068a7d4fea41e7149a75a94088082c66fcf555de3977f69d3'
      },
      mode: 'cors'
    });
}

export default function* root() {
  yield* takeLatest(types.REQUEST_GITHUB_ACCESS, getRepositoryAccess);
}