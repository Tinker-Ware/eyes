import * as types from '../constants/ActionTypes';
import { Map, fromJS } from 'immutable';

const initialState = Map({
  show_ssh_key: false,
  ssh_keys_content: "",
  ssh_keys_title: "",
  ssh_keys: ""
});

function getId(sshkey) {
  return sshkey.reduce((prev, current) => {
    return Math.max(current.id, prev);
  }, -1) + 1;
}

export default function sshKeys(state = initialState, action) {
  switch (action.type) {
    case types.SET_SSH_KEY_TITLE:
    {
      return state.set('ssh_keys_title', action.value.get('title'));
    }
    case types.SET_SSH_KEY_CONTENT:
    {
      return state.set('ssh_keys_content', action.value.get('content'));
    }
    case types.SET_SSH_KEY:
    {
      return state.set('ssh_keys', 
        action.value.get('sshKeys').toSet().union(fromJS(
          [{id: getId(action.value.get('sshKeys').toJS()), title: action.value.get('sshKey').get('title'), content:action.value.get('sshKey').get('content'), enable: true}]
        ).toSet()).toList()
      );
    }
    case types.ENABLE_SSH_KEY:
    {
      return state.set('ssh_keys', action.value.get('sshKeys').map(value => 
        value.get('id') === action.value.get('id') ?
          value.set('enable', !value.get('enable')) : value
      ));
    }
    case types.SHOW_SSH_KEY:
    {
      return state.set('show_ssh_key', action.value.get('show_ssh_key'));
    }
    case types.DELETE_SSH_KEY:
    {
      return state.set('ssh_keys', action.value.get('sshKeys').filter(value => 
        value.get('id') !== action.value.get('id')
      ));
    }
    default:
      return state;
  }
}