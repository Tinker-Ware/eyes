import 'whatwg-fetch';
import "babel-polyfill";
import {expect} from 'chai';
import { takeLatest } from 'redux-saga';
import { call, put, fork } from 'redux-saga/effects'; 
import { fromJS } from 'immutable';
import * as actions from '../actions/MiddlewareActions';
import { doRequest, doRequestGetCloudProviderAccess, doRequestGetRepositories, doRequestGetRepositoryAccess, doRequestGetCloudProviderKeys, getCloudProviderAccess, getCloudProviderKeys, getRepositoryAccess, getUserRepositories } from '../sagas';

describe('sagas middleware', () => {
  
  it('handles GET_CLOUD_PROVIDER_ACCESS', () => {
    const generator = getCloudProviderAccess();
    const cloudProviderAccess = {
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
    };
    
    expect(generator.next().value).to.deep.equal(
      call(doRequestGetCloudProviderAccess)
    );
    
    expect(generator.next(cloudProviderAccess).value).to.deep.equal(
      put(actions.setCloudProviderAccess(fromJS({
          cloud_provider: cloudProviderAccess.cloud_provider
        })))
    );
    
    expect(generator.next(cloudProviderAccess.access_token).value).to.deep.equal(
      put(actions.requestCloudProviderSSHKeys(fromJS({
          access_token: cloudProviderAccess.cloud_provider.access_token
        })))
    );
  });
  
  it('handles GET_REPOSITORY_ACCESS', () => {
    const generator = getRepositoryAccess();
    const userAccess = {
      user: {
        "id": 1,
        "username": "tinkerware",
        "access_token": "77e027c7447f468068a7d4fea41e7149a75a94088082c66fcf555de3977f69d3"
      }
    };
    
    expect(generator.next().value).to.deep.equal(
      call(doRequestGetRepositoryAccess)
    );
    
    expect(generator.next(userAccess).value).to.deep.equal(
      put(actions.receiveRepository(fromJS({
          integration: userAccess.user
        })))
    );
  });
  
  it('handles SET_USER_REPOSITORIES', () => {
    const userAccess = {
      user: {
        "id": 1,
        "username": "tinkerware",
        "access_token": "77e027c7447f468068a7d4fea41e7149a75a94088082c66fcf555de3977f69d3"
      }
    };
    const userRepos = {
      "repositories":
      [
        {
          "provider": "github",
          "name": "ghost-blog-site",
          "full_name": "Tinker-Ware/ghost-blog-site",
          "description": "A blog",
          "private": false,
          "html_url": "https://github.com/Tinker-Ware/ghost-blog-site",
          "clone_url": "git@github.com:Tinker-Ware/ghost-blog-site.git",
          "ssh_url": "git@github.com:Tinker-Ware/ghost-blog-site.git"
        },
        {
          "provider": "github",
          "name": "infrastructure",
          "full_name": "Tinker-Ware/infrastructure",
          "description": "Ansible-based configuration definitions for various servers used by the Tinkerware project",
          "private": true, 
          "html_url": "https://github.com/Tinker-Ware/infrastructure",
          "clone_url": "git@github.com/Tinker-Ware/infrastructure.git",
          "ssh_url": "git@github.com/Tinker-Ware/infrastructure.git"
        },
        {
          "provider": "github",
          "name": "provisioning-webpage",
          "full_name": "Tinker-Ware/provisioning-webpage",
          "description": "React + Redux with Babel, hot reloading, testing, linting",
          "private": true,
          "html_url": "https://github.com/Tinker-Ware/provisioning-webpage",
          "clone_url": "git@github.com/Tinker-Ware/provisioning-webpage.git",
          "ssh_url": "git@github.com/Tinker-Ware/provisioning-webpage.git"
        }
      ]
    };
    
    const generator = getUserRepositories({
      'value': fromJS({
        'userName': userAccess.user.username,
        'accessToken': userAccess.user.access_token
      })
    });
    
    expect(generator.next().value).to.deep.equal(
      call(doRequestGetRepositories, userAccess.user.username, userAccess.user.access_token)
    );

    expect(generator.next(userRepos).value).to.deep.equal(
      put(actions.receiveRepositories(fromJS({
        repositories: userRepos.repositories
      })))
    );
  });
  
  it('handles SET_CLOUD_PROVIDER_SSH_KEYS', () => {
    const userAccess = {
      'cloud_provider': {
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
    };
    const cloudProviderKeys = {
      "keys": [
        {
          "id": 1,
          "name": "My little key",
          "provider": "digital_ocean",
          "fingerprint": "00:11:22:33:44:55:66:77:88:99:aa:bb:cc:dd:ee:ff",
          "public_key": "ssh-rsa AAAAB3NzaC1yc2EAAAABIwAAAQEAklOUpkDHrfHY17SbrmTIpNLTGK9Tjom/BWDSUGPl+nafzlHDTYW7hdI4yZ5ew18JH4JW9jbhUFrviQzM7xlELEVf4h9lFX5QVkbPppSwg0cda3Pbv7kOdJ/MTyBlWXFCR+HAo3FXRitBqxiX1nKhXpHAZsMciLq8V6RjsNAQwdsdMFvSlVK/7XAt3FaoJoAsncM1Q9x5+3V0Ww68/eIFmb1zuUFljQJKprrX88XypNDvjYNby6vw/Pb0rwert/EnmZ+AW4OZPnTPI89ZPmVMLuayrD2cE86Z/il8b+gw3r3+1nKatmIkjn2so1d01QraTlMqVSsbxNrRFi9wrf+M7Q== schacon@mylaptop.local"
        }
      ]
    };
    
    const generator = getCloudProviderKeys({
      'value': fromJS({
        'access_token': userAccess.cloud_provider.access_token
      })
    });
    
    expect(generator.next().value).to.deep.equal(
      call(doRequestGetCloudProviderKeys, userAccess.cloud_provider.access_token)
    );

    expect(generator.next(cloudProviderKeys).value).to.deep.equal(
      put(actions.setCloudProviderSshKeys(fromJS({
        sshKeys: [],
        sshKey: cloudProviderKeys.keys
      })))
    );
  });
});