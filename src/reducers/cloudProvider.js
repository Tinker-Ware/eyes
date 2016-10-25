import { Map } from "immutable";
import { CLEAR_CLOUD_PROVIDER_SSH_KEYS, SET_CLOUD_PROVIDER, SET_CLOUD_PROVIDER_SSH_KEY_NAME, SET_CLOUD_PROVIDER_SSH_KEY_PUBLIC_KEY, SET_CLOUD_PROVIDER_SSH_KEY, ENABLE_CLOUD_PROVIDER_SSH_KEY, SHOW_CLOUD_PROVIDER_SSH_KEY, DELETE_CLOUD_PROVIDER_SSH_KEY } from "../constants/ActionTypes";

const initialState = Map({
  server_provider: "",
  SHOW_CLOUD_PROVIDER_SSH_KEY: false,
  cloud_provider_ssh_keys_name: "",
  cloud_provider_ssh_keys_public_key: "",
  cloud_provider_ssh_keys: ""
});

export default function cloudProvider(state = initialState, action) {
  switch (action.type) {
    case CLEAR_CLOUD_PROVIDER_SSH_KEYS:
    {
      return state.set("cloud_provider_ssh_keys", action.value.get("cloud_provider_ssh_keys"));
    }
    case SET_CLOUD_PROVIDER:
    {
      return state.set("cloud_provider", action.value.get("cloud_provider"));
    }
    case SET_CLOUD_PROVIDER_SSH_KEY_NAME:
    {
      return state.set("cloud_provider_ssh_keys_name", action.value.get("name"));
    }
    case SET_CLOUD_PROVIDER_SSH_KEY_PUBLIC_KEY:
    {
      return state.set("cloud_provider_ssh_keys_public_key", action.value.get("public_key"));
    }
    case SET_CLOUD_PROVIDER_SSH_KEY:
    {
      return state.set("cloud_provider_ssh_keys",
        action.value.get("sshKeys").toSet().union(
          action.value.get("sshKey").map( value =>
            value.set("enable", false)
          )
        ).toList()
      );
    }
    case ENABLE_CLOUD_PROVIDER_SSH_KEY:
    {
      return state.set("cloud_provider_ssh_keys", action.value.get("sshKeys").map(value=>
        value.get("id") === action.value.get("id") ?
          value.set("enable", !value.get("enable")) : value
      ));
    }
    case SHOW_CLOUD_PROVIDER_SSH_KEY:
    {
      return state.set("show_cloud_provider_ssh_key", action.value.get("show_cloud_provider_ssh_key"));
    }
    case DELETE_CLOUD_PROVIDER_SSH_KEY:
    {
      return state.set("cloud_provider_ssh_keys", action.value.get("sshKeys").filter(value=>
        value.get("id") !== action.value.get("id")
      ));
    }
    default:
      return state;
  }
}
