import * as types from '../constants/ActionTypes';

export function setProjectName(value) {
  return { type: types.SET_PROJECT_NAME, value };
}

export function setApplication(value) {
  return { type: types.SET_APPLICATION, value };
}