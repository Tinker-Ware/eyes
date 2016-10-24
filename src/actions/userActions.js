import { REQUEST_USER_SESION, REQUEST_POST_USER, SET_USER, SET_USER_INFORMATION, SET_USER_SESION, SET_USER_SESION_EMAIL, SET_USER_SESION_PASSWORD } from "../constants/ActionTypes";

export function requestGetUserSesion(value) {
  return { type: REQUEST_USER_SESION, value };
}

export function requestPostUser(value) {
  return { type: REQUEST_POST_USER, value };
}

export function setUser(value){
  return { type: SET_USER, value };
}

export function setUserInformation(value){
  return { type: SET_USER_INFORMATION, value };
}

export function setUserSesion(value){
  return { type: SET_USER_SESION, value };
}

export function setUserSesionEmail(value){
  return { type: SET_USER_SESION_EMAIL, value };
}

export function setUserSesionPassword(value){
  return { type: SET_USER_SESION_PASSWORD, value };
}
