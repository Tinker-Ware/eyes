import { Map, fromJS } from 'immutable';
import { expect } from 'chai';
import cloudProvider from '../reducers/cloudProvider';

describe('reducer', () => {
  
  it('handles CLEAR_CLOUD_PROVIDER_SSH_KEYS', () => {
    const initialState = Map();
    const action = {
      type: 'CLEAR_CLOUD_PROVIDER_SSH_KEYS',
      value: fromJS({
        cloud_provider_ssh_keys: ''
      })
    };
    const nextState = cloudProvider(initialState, action);

    expect(nextState).to.equal(fromJS({
      cloud_provider_ssh_keys: ''
    }));
  });
  
  it('handles SET_CLOUD_PROVIDER', () => {
    const initialState = Map();
    const action = {type: 'SET_CLOUD_PROVIDER', value: fromJS({
      cloud_provider: {
        "access_token": "77e027c7447f468068a7d4fea41e7149a75a94088082c66fcf555de3977f69d3",
        "token_type": "bearer",
        "expires_in": "2592000",
        "refresh_token": "00a3aae641658d",
        "scope": "read write",
        "info": {
          "name": "Sammy the Shark",
          "email":"sammy@digitalocean.com",
          "uuid":"e028b1b918853eca7fba208a9d7e9d29a6e93c57"
        }
      }})
    };
    const nextState = cloudProvider(initialState, action);

    expect(nextState).to.equal(fromJS({
      cloud_provider: {
        "access_token": "77e027c7447f468068a7d4fea41e7149a75a94088082c66fcf555de3977f69d3",
        "token_type": "bearer",
        "expires_in": "2592000",
        "refresh_token": "00a3aae641658d",
        "scope": "read write",
        "info": {
          "name": "Sammy the Shark",
          "email":"sammy@digitalocean.com",
          "uuid":"e028b1b918853eca7fba208a9d7e9d29a6e93c57"
        }
      }
    }));
  });
  
  it('handles SET_CLOUD_PROVIDER_SSH_KEY when no exist SSHKeys', () => {
    const initialState = Map();
    const action = {
      type: 'SET_CLOUD_PROVIDER_SSH_KEY',
      value: fromJS({
        sshKeys: [],
        sshKey: [{
          "id": 1,
          "name": "My little key",
          "provider": "digital_ocean",
          "fingerprint": "00:11:22:33:44:55:66:77:88:99:aa:bb:cc:dd:ee:ff",
          "public_key": "ssh-rsa AAAAB3NzaC1yc2EAAAABIwAAAQEAklOUpkDHrfHY17SbrmTIpNLTGK9Tjom/BWDSUGPl+nafzlHDTYW7hdI4yZ5ew18JH4JW9jbhUFrviQzM7xlELEVf4h9lFX5QVkbPppSwg0cda3Pbv7kOdJ/MTyBlWXFCR+HAo3FXRitBqxiX1nKhXpHAZsMciLq8V6RjsNAQwdsdMFvSlVK/7XAt3FaoJoAsncM1Q9x5+3V0Ww68/eIFmb1zuUFljQJKprrX88XypNDvjYNby6vw/Pb0rwert/EnmZ+AW4OZPnTPI89ZPmVMLuayrD2cE86Z/il8b+gw3r3+1nKatmIkjn2so1d01QraTlMqVSsbxNrRFi9wrf+M7Q== schacon@mylaptop.local"
        }]
      })
    };
    const nextState = cloudProvider(initialState, action);

    expect(nextState).to.equal(fromJS({
      cloud_provider_ssh_keys: [{
        "id": 1,
        "name": "My little key",
        "provider": "digital_ocean",
        "fingerprint": "00:11:22:33:44:55:66:77:88:99:aa:bb:cc:dd:ee:ff",
        "public_key": "ssh-rsa AAAAB3NzaC1yc2EAAAABIwAAAQEAklOUpkDHrfHY17SbrmTIpNLTGK9Tjom/BWDSUGPl+nafzlHDTYW7hdI4yZ5ew18JH4JW9jbhUFrviQzM7xlELEVf4h9lFX5QVkbPppSwg0cda3Pbv7kOdJ/MTyBlWXFCR+HAo3FXRitBqxiX1nKhXpHAZsMciLq8V6RjsNAQwdsdMFvSlVK/7XAt3FaoJoAsncM1Q9x5+3V0Ww68/eIFmb1zuUFljQJKprrX88XypNDvjYNby6vw/Pb0rwert/EnmZ+AW4OZPnTPI89ZPmVMLuayrD2cE86Z/il8b+gw3r3+1nKatmIkjn2so1d01QraTlMqVSsbxNrRFi9wrf+M7Q== schacon@mylaptop.local",
        enable: false
      }]
    }));
  });
  
  it('handles SET_CLOUD_PROVIDER_SSH_KEY when exist SSHKeys', () => {
    const initialState = Map();
    const action = {
      type: 'SET_CLOUD_PROVIDER_SSH_KEY',
      value: fromJS({
        sshKeys:
          [{
            "id": 0,
            "name": "My little key",
            "provider": "digital_ocean",
            "fingerprint": "00:11:22:33:44:55:66:77:88:99:aa:bb:cc:dd:ee:ff",
            "public_key": "ssh-rsa AAAAB3NzaC1yc2EAAAABIwAAAQEAklOUpkDHrfHY17SbrmTIpNLTGK9Tjom/BWDSUGPl+nafzlHDTYW7hdI4yZ5ew18JH4JW9jbhUFrviQzM7xlELEVf4h9lFX5QVkbPppSwg0cda3Pbv7kOdJ/MTyBlWXFCR+HAo3FXRitBqxiX1nKhXpHAZsMciLq8V6RjsNAQwdsdMFvSlVK/7XAt3FaoJoAsncM1Q9x5+3V0Ww68/eIFmb1zuUFljQJKprrX88XypNDvjYNby6vw/Pb0rwert/EnmZ+AW4OZPnTPI89ZPmVMLuayrD2cE86Z/il8b+gw3r3+1nKatmIkjn2so1d01QraTlMqVSsbxNrRFi9wrf+M7Q== schacon@mylaptop.local",
            enable: false
          }],
        sshKey: [{
          "id": 1,
          "name": "My little key",
          "provider": "digital_ocean",
          "fingerprint": "00:11:22:33:44:55:66:77:88:99:aa:bb:cc:dd:ee:ff",
          "public_key": "ssh-rsa AAAAB3NzaC1yc2EAAAABIwAAAQEAklOUpkDHrfHY17SbrmTIpNLTGK9Tjom/BWDSUGPl+nafzlHDTYW7hdI4yZ5ew18JH4JW9jbhUFrviQzM7xlELEVf4h9lFX5QVkbPppSwg0cda3Pbv7kOdJ/MTyBlWXFCR+HAo3FXRitBqxiX1nKhXpHAZsMciLq8V6RjsNAQwdsdMFvSlVK/7XAt3FaoJoAsncM1Q9x5+3V0Ww68/eIFmb1zuUFljQJKprrX88XypNDvjYNby6vw/Pb0rwert/EnmZ+AW4OZPnTPI89ZPmVMLuayrD2cE86Z/il8b+gw3r3+1nKatmIkjn2so1d01QraTlMqVSsbxNrRFi9wrf+M7Q== schacon@mylaptop.local"
        },
        {
          "id": 2,
          "name": "My little key",
          "provider": "digital_ocean",
          "fingerprint": "00:11:22:33:44:55:66:77:88:99:aa:bb:cc:dd:ee:ff",
          "public_key": "ssh-rsa AAAAB3NzaC1yc2EAAAABIwAAAQEAklOUpkDHrfHY17SbrmTIpNLTGK9Tjom/BWDSUGPl+nafzlHDTYW7hdI4yZ5ew18JH4JW9jbhUFrviQzM7xlELEVf4h9lFX5QVkbPppSwg0cda3Pbv7kOdJ/MTyBlWXFCR+HAo3FXRitBqxiX1nKhXpHAZsMciLq8V6RjsNAQwdsdMFvSlVK/7XAt3FaoJoAsncM1Q9x5+3V0Ww68/eIFmb1zuUFljQJKprrX88XypNDvjYNby6vw/Pb0rwert/EnmZ+AW4OZPnTPI89ZPmVMLuayrD2cE86Z/il8b+gw3r3+1nKatmIkjn2so1d01QraTlMqVSsbxNrRFi9wrf+M7Q== schacon@mylaptop.local"
        }]
      })
    };
    const nextState = cloudProvider(initialState, action);

    expect(nextState).to.equal(fromJS({
      cloud_provider_ssh_keys: [{
        "id": 0,
        "name": "My little key",
        "provider": "digital_ocean",
        "fingerprint": "00:11:22:33:44:55:66:77:88:99:aa:bb:cc:dd:ee:ff",
        "public_key": "ssh-rsa AAAAB3NzaC1yc2EAAAABIwAAAQEAklOUpkDHrfHY17SbrmTIpNLTGK9Tjom/BWDSUGPl+nafzlHDTYW7hdI4yZ5ew18JH4JW9jbhUFrviQzM7xlELEVf4h9lFX5QVkbPppSwg0cda3Pbv7kOdJ/MTyBlWXFCR+HAo3FXRitBqxiX1nKhXpHAZsMciLq8V6RjsNAQwdsdMFvSlVK/7XAt3FaoJoAsncM1Q9x5+3V0Ww68/eIFmb1zuUFljQJKprrX88XypNDvjYNby6vw/Pb0rwert/EnmZ+AW4OZPnTPI89ZPmVMLuayrD2cE86Z/il8b+gw3r3+1nKatmIkjn2so1d01QraTlMqVSsbxNrRFi9wrf+M7Q== schacon@mylaptop.local",
        enable: false
      },{
        "id": 1,
        "name": "My little key",
        "provider": "digital_ocean",
        "fingerprint": "00:11:22:33:44:55:66:77:88:99:aa:bb:cc:dd:ee:ff",
        "public_key": "ssh-rsa AAAAB3NzaC1yc2EAAAABIwAAAQEAklOUpkDHrfHY17SbrmTIpNLTGK9Tjom/BWDSUGPl+nafzlHDTYW7hdI4yZ5ew18JH4JW9jbhUFrviQzM7xlELEVf4h9lFX5QVkbPppSwg0cda3Pbv7kOdJ/MTyBlWXFCR+HAo3FXRitBqxiX1nKhXpHAZsMciLq8V6RjsNAQwdsdMFvSlVK/7XAt3FaoJoAsncM1Q9x5+3V0Ww68/eIFmb1zuUFljQJKprrX88XypNDvjYNby6vw/Pb0rwert/EnmZ+AW4OZPnTPI89ZPmVMLuayrD2cE86Z/il8b+gw3r3+1nKatmIkjn2so1d01QraTlMqVSsbxNrRFi9wrf+M7Q== schacon@mylaptop.local",
        enable: false
      },{
        "id": 2,
        "name": "My little key",
        "provider": "digital_ocean",
        "fingerprint": "00:11:22:33:44:55:66:77:88:99:aa:bb:cc:dd:ee:ff",
        "public_key": "ssh-rsa AAAAB3NzaC1yc2EAAAABIwAAAQEAklOUpkDHrfHY17SbrmTIpNLTGK9Tjom/BWDSUGPl+nafzlHDTYW7hdI4yZ5ew18JH4JW9jbhUFrviQzM7xlELEVf4h9lFX5QVkbPppSwg0cda3Pbv7kOdJ/MTyBlWXFCR+HAo3FXRitBqxiX1nKhXpHAZsMciLq8V6RjsNAQwdsdMFvSlVK/7XAt3FaoJoAsncM1Q9x5+3V0Ww68/eIFmb1zuUFljQJKprrX88XypNDvjYNby6vw/Pb0rwert/EnmZ+AW4OZPnTPI89ZPmVMLuayrD2cE86Z/il8b+gw3r3+1nKatmIkjn2so1d01QraTlMqVSsbxNrRFi9wrf+M7Q== schacon@mylaptop.local",
        enable: false
      }]
    }));
  });
  
  it('handles SET_CLOUD_PROVIDER_SSH_KEY_NAME', () => {
    const initialState = Map();
    const action = {
      type: 'SET_CLOUD_PROVIDER_SSH_KEY_NAME',
      value: fromJS({
        name: 'Marco SSH'
      })
    };
    const nextState = cloudProvider(initialState, action);

    expect(nextState).to.equal(fromJS({
      cloud_provider_ssh_keys_name: 'Marco SSH'
    }));
  });
  
  it('handles SHOW_CLOUD_PROVIDER_SSH_KEY', () => {
    const initialState = Map();
    const action = {
      type: 'SHOW_CLOUD_PROVIDER_SSH_KEY',
      value: fromJS({
        show_cloud_provider_ssh_key: true
      })
    };
    const nextState = cloudProvider(initialState, action);

    expect(nextState).to.equal(fromJS({
      show_cloud_provider_ssh_key: true
    }));
  });
  
  it('handles SET_CLOUD_PROVIDER_SSH_KEY_PUBLIC_KEY', () => {
    const initialState = Map();
    const action = {
      type: 'SET_CLOUD_PROVIDER_SSH_KEY_PUBLIC_KEY',
      value: fromJS({
        public_key: "ssh-rsa AAAAB3NzaC1yc2EAAAABIwAAAQEAklOUpkDHrfHY17SbrmTIpNLTGK9Tjom/BWDSUGPl+nafzlHDTYW7hdI4yZ5ew18JH4JW9jbhUFrviQzM7xlELEVf4h9lFX5QVkbPppSwg0cda3Pbv7kOdJ/MTyBlWXFCR+HAo3FXRitBqxiX1nKhXpHAZsMciLq8V6RjsNAQwdsdMFvSlVK/7XAt3FaoJoAsncM1Q9x5+3V0Ww68/eIFmb1zuUFljQJKprrX88XypNDvjYNby6vw/Pb0rwert/EnmZ+AW4OZPnTPI89ZPmVMLuayrD2cE86Z/il8b+gw3r3+1nKatmIkjn2so1d01QraTlMqVSsbxNrRFi9wrf+M7Q== schacon@mylaptop.local"
      })
    };
    const nextState = cloudProvider(initialState, action);

    expect(nextState).to.equal(fromJS({
      cloud_provider_ssh_keys_public_key: "ssh-rsa AAAAB3NzaC1yc2EAAAABIwAAAQEAklOUpkDHrfHY17SbrmTIpNLTGK9Tjom/BWDSUGPl+nafzlHDTYW7hdI4yZ5ew18JH4JW9jbhUFrviQzM7xlELEVf4h9lFX5QVkbPppSwg0cda3Pbv7kOdJ/MTyBlWXFCR+HAo3FXRitBqxiX1nKhXpHAZsMciLq8V6RjsNAQwdsdMFvSlVK/7XAt3FaoJoAsncM1Q9x5+3V0Ww68/eIFmb1zuUFljQJKprrX88XypNDvjYNby6vw/Pb0rwert/EnmZ+AW4OZPnTPI89ZPmVMLuayrD2cE86Z/il8b+gw3r3+1nKatmIkjn2so1d01QraTlMqVSsbxNrRFi9wrf+M7Q== schacon@mylaptop.local"
    }));
  });
  
  it('handles ENABLE_CLOUD_PROVIDER_SSH_KEY', () => {
    const initialState = Map();
    const action = {
      type: 'ENABLE_CLOUD_PROVIDER_SSH_KEY',
      value: fromJS({
        sshKeys:
          [{
            id: 0,
            name: "title", 
            public_key:"value",
            enable: true
          },
          {
            id: 1,
            name: "title", 
            public_key:"value",
            enable: true
          }],
        id: 0
      })
    };
    const nextState = cloudProvider(initialState, action);

    expect(nextState).to.equal(fromJS({
      cloud_provider_ssh_keys: [{
        id: 0, name: "title", public_key: "value", enable: false
      },{
        id: 1, name: "title", public_key: "value", enable: true
      }]
    }));
  });
  
  it('handles DELETE_CLOUD_PROVIDER_SSH_KEY', () => {
    const initialState = Map();
    const action = {
      type: 'DELETE_CLOUD_PROVIDER_SSH_KEY',
      value: fromJS({
        sshKeys:
          [{
            id: 0,
            name: "title",
            public_key:"value",
            enable: true
          },
          {
            id: 1,
            name: "title",
            public_key:"value",
            enable: true
          }],
        id: 1
      })
    };
    const nextState = cloudProvider(initialState, action);

    expect(nextState).to.equal(fromJS({
      cloud_provider_ssh_keys: [{
        id: 0, name: "title", public_key:"value", enable: true
      }]
    }));
  });

  it('handles DEFAULT', () => {
    const initialState = Map();
    const action = {type: ''};
    const nextState = cloudProvider(initialState, action);
    
    expect(nextState).to.equal(fromJS({
    }));
  });
  
});
