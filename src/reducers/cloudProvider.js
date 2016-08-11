import { Map, fromJS } from 'immutable';
import * as types from '../constants/ActionTypes';

const initialState = Map({
  server_provider: "",
  SHOW_CLOUD_PROVIDER_SSH_KEY: false,
  cloud_provider_ssh_keys_name: "",
  cloud_provider_ssh_keys_public_key: "",
  cloud_provider_ssh_keys: ""
});

export default function cloudProvider(state = initialState, action) {
  switch (action.type) {
    case types.CLEAR_CLOUD_PROVIDER_SSH_KEYS:
    {
      return state.set('cloud_provider_ssh_keys', action.value.get('cloud_provider_ssh_keys'));
    }
    case types.SET_CLOUD_PROVIDER:
    {
      return state.set('cloud_provider', action.value.get('cloud_provider'));
    }
    case types.SET_CLOUD_PROVIDER_SSH_KEY_NAME:
    {
      return state.set('cloud_provider_ssh_keys_name', action.value.get('name'));
    }
    case types.SET_CLOUD_PROVIDER_SSH_KEY_PUBLIC_KEY:
    {
      return state.set('cloud_provider_ssh_keys_public_key', action.value.get('public_key'));
    }
    case types.SET_CLOUD_PROVIDER_SSH_KEY:
    {
      return state.set('cloud_provider_ssh_keys', 
        action.value.get('sshKeys').toSet().union(
          action.value.get('sshKey').map( value =>
            value.set('enable', false)
          )
        ).toList()
      );
    }
    case types.ENABLE_CLOUD_PROVIDER_SSH_KEY:
    {
      return state.set('cloud_provider_ssh_keys', action.value.get('sshKeys').map(value => 
        value.get('id') === action.value.get('id') ?
          value.set('enable', !value.get('enable')) : value
      ));
    }
    case types.SHOW_CLOUD_PROVIDER_SSH_KEY:
    {
      return state.set('show_cloud_provider_ssh_key', action.value.get('show_cloud_provider_ssh_key'));
    }
    case types.DELETE_CLOUD_PROVIDER_SSH_KEY:
    {
      return state.set('cloud_provider_ssh_keys', action.value.get('sshKeys').filter(value => 
        value.get('id') !== action.value.get('id')
      ));
    }
    default:
      return state;
  }
}
