import * as types from "../constants/ApplicationActionTypes";

export function setNotification(value) {
  return { type: types.SET_NOTIFICATION, value };
}
