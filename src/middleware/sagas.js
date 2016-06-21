import 'whatwg-fetch';
import { takeLatest } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import * as actions from './actions/MiddlewareActions';
import * as types from './constants/ActionsTypes';

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

function githubAccessToken(request){
  fetch(request)
    .then(checkStatus)
    .then(parseJSON)
    .then(data => console.log('request succeeded with JSON response', data))
    .catch(function(error) {
      return error;
    });  
}

function* getGithubAccess() {
  const user = yield call(
    githubAccessToken, 'http://localhost:3100/gh_callback',
    {
      method: 'GET',
      mode: 'cors'
    });
}

export default function* root() {
  yield* takeLatest(types.REQUEST_GITHUB_ACCESS, getGithubAccess);
}