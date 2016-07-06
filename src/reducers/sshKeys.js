import * as types from '../constants/ActionTypes';
import {Map, fromJS} from 'immutable';

const initialState = Map({ssh_keys:""});

function getId(sshkey) {
  return sshkey.reduce((prev, current) => {
    return Math.max(current.id, prev);
  }, -1) + 1;
}

export default function sshKeys(state = initialState, action) {
  switch (action.type) {
    case types.SET_SSH_KEY_TITLE:
    {
      return state.set('ssh_keys_title', fromJS(action.value.get('title')));
    }
    case types.SET_SSH_KEY_CONTENT:
    {
      return state.set('ssh_keys_content', fromJS(action.value.get('content')));
    }
    case types.SET_SSH_KEY:
    {
      return state.set('ssh_keys', action.sshKeys.toSet().union(fromJS([{id: getId(action.sshKeys.toJS()), title: action.value.get('sshKey').get('title'), content:action.value.get('sshKey').get('content'), enable: true}]).toSet()).toList());
    }
    case types.ENABLE_SSH_KEY:
    {
      return state.set('ssh_keys', action.sshKeys.map(value => 
        value.get('id') === action.value.get('id') ?
          value.set('enable', !value.get('enable')) : value
      ));
    }
    case types.DELETE_SSH_KEY:
    {
      return state.set('ssh_keys', action.sshKeys.filter(value => 
        value.get('id') !== action.value.get('id')
      ));
    }
    default:
      return state;
  }
}