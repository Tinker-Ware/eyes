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
  
  it('handles SET_SSH_KEYS_TITLE', () => {
    const initialState = Map();
    const action = {
      type: 'SET_SSH_KEY_TITLE',
      value: fromJS({
        title: 'Marco SSH'
      })
    };
    const nextState = sshKeys(initialState, action);

    expect(nextState).to.equal(fromJS({
      ssh_keys_title: 'Marco SSH'
    }));
  });
  
  it('handles SET_SSH_KEYS_CONTENT', () => {
    const initialState = Map();
    const action = {
      type: 'SET_SSH_KEY_CONTENT',
      value: fromJS({
        content: "ssh-rsa AAAAB3NzaC1yc2EAAAABIwAAAQEAklOUpkDHrfHY17SbrmTIpNLTGK9Tjom/BWDSUGPl+nafzlHDTYW7hdI4yZ5ew18JH4JW9jbhUFrviQzM7xlELEVf4h9lFX5QVkbPppSwg0cda3Pbv7kOdJ/MTyBlWXFCR+HAo3FXRitBqxiX1nKhXpHAZsMciLq8V6RjsNAQwdsdMFvSlVK/7XAt3FaoJoAsncM1Q9x5+3V0Ww68/eIFmb1zuUFljQJKprrX88XypNDvjYNby6vw/Pb0rwert/EnmZ+AW4OZPnTPI89ZPmVMLuayrD2cE86Z/il8b+gw3r3+1nKatmIkjn2so1d01QraTlMqVSsbxNrRFi9wrf+M7Q== schacon@mylaptop.local"
      })
    };
    const nextState = sshKeys(initialState, action);

    expect(nextState).to.equal(fromJS({
      ssh_keys_content: "ssh-rsa AAAAB3NzaC1yc2EAAAABIwAAAQEAklOUpkDHrfHY17SbrmTIpNLTGK9Tjom/BWDSUGPl+nafzlHDTYW7hdI4yZ5ew18JH4JW9jbhUFrviQzM7xlELEVf4h9lFX5QVkbPppSwg0cda3Pbv7kOdJ/MTyBlWXFCR+HAo3FXRitBqxiX1nKhXpHAZsMciLq8V6RjsNAQwdsdMFvSlVK/7XAt3FaoJoAsncM1Q9x5+3V0Ww68/eIFmb1zuUFljQJKprrX88XypNDvjYNby6vw/Pb0rwert/EnmZ+AW4OZPnTPI89ZPmVMLuayrD2cE86Z/il8b+gw3r3+1nKatmIkjn2so1d01QraTlMqVSsbxNrRFi9wrf+M7Q== schacon@mylaptop.local"
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

  it('handles DEFAULT', () => {
    const initialState = Map();
    const action = {type: ''};
    const nextState = sshKeys(initialState, action);
    
    expect(nextState).to.equal(fromJS({
    }));
  });
});
