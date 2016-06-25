import 'whatwg-fetch';
import { takeLatest } from 'redux-saga';
import { call, put, fork } from 'redux-saga/effects';
import * as actions from './actions/MiddlewareActions';
import * as types from '../constants/ActionTypes';

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  } else {
    let error = new Error(response.statusText);
    error.response = response;
    throw error;
  }
}

function parseJSON(response) {
  return response.json();
}

function doRequest(url, options){
  return fetch(url, options)
    .then(checkStatus)
    .then(response => response.json())
    .then(data => data)
    .catch(error => error);  
}

function* getRepositoryAccess() {
  const userAccessToken = yield call(
    doRequest, 'http://localhost:3100/api/v1/repository/gh_callback',
    {
      method: 'GET',
      mode: 'cors'
    });
  yield put(actions.receiveRepository(userAccessToken.user.access_token));
  yield call(getRepositories);
  yield put(actions.showRepositories(true));
}

function* getRepository(repositoryName) {
  const userRepo = yield call(
    doRequest, 'http://localhost:3100/api/v1/repository/github/tinkerware/'+repositoryName,
    {
      method: 'GET',
      headers: {
        'authorization': 'Bearer qphYSqjEFk1RcFxYqqIIFk4vaBJvDoBr3t9aHTp1JFEAO0NS7ECyLJJyUPybOUNf',
        'provider-token': '77e027c7447f468068a7d4fea41e7149a75a94088082c66fcf555de3977f69d3'
      },
      mode: 'cors'
    });
}

function* getRepositories() {
  const userRepos = yield call(
    doRequest, 'http://localhost:3100/api/v1/repository/github/tinkerware/repos',
    {
      method: 'GET',
      headers: {
        'authorization': 'Bearer qphYSqjEFk1RcFxYqqIIFk4vaBJvDoBr3t9aHTp1JFEAO0NS7ECyLJJyUPybOUNf',
        'provider-token': '77e027c7447f468068a7d4fea41e7149a75a94088082c66fcf555de3977f69d3'
      },
      mode: 'cors'
    });
  yield put(actions.receiveRepositories(userRepos));
}

export default function* root() {
  yield* takeLatest(types.REQUEST_GITHUB_ACCESS, getRepositoryAccess);
}