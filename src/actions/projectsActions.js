import * as types from "../constants/Projects";

export function requestGetUserProjects(value) {
  return { type: types.REQUEST_USER_PROJECTS, value };
}
export function setUserProjects(value) {
  return { type: types.SET_USER_PROJECTS, value };
}
