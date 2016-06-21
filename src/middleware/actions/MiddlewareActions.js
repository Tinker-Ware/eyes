import * as types from '../constants/ActionsTypes';

export function requestGithubAccess(){
  return {
    type: types.REQUEST_GITHUB_ACCESS
  };
}