import {Map, fromJS} from 'immutable';
import {expect} from 'chai';

import sshKeys from '../reducers/sshKeys';

describe('reducer', () => {
  it('handles SET_SSH_KEYS when no exist SSHKeys', () => {
    const initialState = Map();
    const action = {
      type: 'SET_SSH_KEY',
      sshKeys: fromJS(
        [])
      ,
      value: fromJS({
        sshKey: {
          id: 1, 
          title: "title", 
          content:"value"
        }
      })
    };
    const nextState = sshKeys(initialState, action);

    expect(nextState).to.equal(fromJS({
      ssh_keys: [{
        id: 0, title: "title", content:"value", enable: true
      }]
    }));
  });
  
  it('handles SET_SSH_KEYS when exist SSHKeys', () => {
    const initialState = Map();
    const action = {
      type: 'SET_SSH_KEY',
      sshKeys: fromJS(
        [{
          id: 0, 
          title: "title", 
          content:"value",
          enable: false
        }])
      ,
      value: fromJS({
        sshKey: {
          id: 1, 
          title: "title", 
          content:"value"
        }
      })
    };
    const nextState = sshKeys(initialState, action);

    expect(nextState).to.equal(fromJS({
      ssh_keys: [{
        id: 0, title: "title", content:"value", enable: false
      },{
        id: 1, title: "title", content:"value", enable: true
      }]
    }));
  });
  
  it('handles ENABLE_SSH_KEY', () => {
    const initialState = Map();
    const action = {
      type: 'ENABLE_SSH_KEY',
      sshKeys: fromJS(
        [{
          id: 0,
          title: "title", 
          content:"value",
          enable: true
        },
        {
          id: 1,
          title: "title", 
          content:"value",
          enable: true
        }])
      ,
      value: fromJS({
        id: 0
      })
    };
    const nextState = sshKeys(initialState, action);

    expect(nextState).to.equal(fromJS({
      ssh_keys: [{
        id: 0, title: "title", content:"value", enable: false
      },{
        id: 1, title: "title", content:"value", enable: true
      }]
    }));
  });
  
  it('handles DELETE_SSH_KEY', () => {
    const initialState = Map();
    const action = {
      type: 'DELETE_SSH_KEY',
      sshKeys: fromJS(
        [{
          id: 0, 
          title: "title", 
          content:"value",
          enable: true
        },
        {
          id: 1, 
          title: "title", 
          content:"value",
          enable: true
        }])
      ,
      value: fromJS({
        id: 1
      })
    };
    const nextState = sshKeys(initialState, action);

    expect(nextState).to.equal(fromJS({
      ssh_keys: [{
        id: 0, title: "title", content:"value", enable: true
      }]
    }));
  });
});
