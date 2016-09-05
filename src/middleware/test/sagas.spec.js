import "babel-polyfill";
import { expect } from 'chai';
import { takeLatest } from 'redux-saga';
import { call, put, fork } from 'redux-saga/effects'; 
import { fromJS } from 'immutable';
import * as actions from '../actions/MiddlewareActions';
import { doRequest, doRequestGetCloudProviderAccess, doRequestPostUser, doRequestPostUserProject, doRequestGetRepositories, doRequestGetRepositoryAccess, doRequestGetCloudProviderKeys, doRequestGetUserSesion, doRequestPostCloudProviderKey, getCloudProviderAccess, getCloudProviderKeys, getRepositoryAccess, getUserSesion, getUserRepositories, postCloudProviderKey, postUser, postUserProject } from '../sagas';

describe('sagas middleware', () => {
  
  it('handles GET_CLOUD_PROVIDER_ACCESS', () => {
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
    
    const userSession = {
      "user_session": {
        "email": "some@email.com",
        "token": "qphYSqjEFk1RcFxYqqIIFk4vaBJvDoBr3t9aHTp1JFEAO0NS7ECyLJJyUPybOUNf"
      }
    };
    
    const generator = getCloudProviderAccess({
      value: 
      fromJS({
        "authorization": "qphYSqjEFk1RcFxYqqIIFk4vaBJvDoBr3t9aHTp1JFEAO0NS7ECyLJJyUPybOUNf"
       })
     });
    
    const err = new ReferenceError('404');
    const generatorError = function () { throw err; };
    expect(generatorError).to.throw(err);
     
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
          access_token: cloudProviderAccess.cloud_provider.access_token,
          authorization: userSession.user_session.token
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
    
    const err = new ReferenceError('404');
    const generatorError = function () { throw err; };
    expect(generatorError).to.throw(err);
    
    expect(generator.next().value).to.deep.equal(
      call(doRequestGetRepositoryAccess)
    );
    
    expect(generator.next(userAccess).value).to.deep.equal(
      put(actions.receiveRepository(fromJS({
          integration: userAccess.user
        })))
    );
  });
  
  it('handles GET_CLOUD_PROVIDER_SSH_KEYS', () => {
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
    
    const authorization = "qphYSqjEFk1RcFxYqqIIFk4vaBJvDoBr3t9aHTp1JFEAO0NS7ECyLJJyUPybOUNf";
   
    const generator = getCloudProviderKeys({
      'value': fromJS({
        'access_token': userAccess.cloud_provider.access_token,
        'authorization': authorization
      })
    });
    
    const err = new ReferenceError('404');
    const generatorError = function () { throw err; };
    expect(generatorError).to.throw(err);
    
    expect(generator.next().value).to.deep.equal(
      call(doRequestGetCloudProviderKeys, userAccess.cloud_provider.access_token, authorization)
    );

    expect(generator.next(cloudProviderKeys).value).to.deep.equal(
      put(actions.setCloudProviderSshKeys(fromJS({
        sshKeys: [],
        sshKey: cloudProviderKeys.keys
      })))
    );
  });
  
  it('handles GET_USER_SESION', () => {
    const userAccess = {
      "user_session": {
        'email': 'some@email.com',
        "token": "GSjtfp4Gdrb5OovWSrVEwy78fe2IhbHmGcaYmSN8IQp5dxeJcH4wH8qDt3ut2Ulu"
      }
    };
    
    const generator = getUserSesion({
      'value': fromJS({
        "user_session": userAccess.user_session
      })
    });
    
    const err = new ReferenceError('404');
    const generatorError = function () { throw err; };
    expect(generatorError).to.throw(err);
    
    expect(generator.next().value).to.deep.equal(
      call(doRequestGetUserSesion, fromJS(userAccess.user_session))
    );
    
    expect(generator.next(userAccess).value).to.deep.equal(
      put(actions.setUserSesion(fromJS({
        user_session: userAccess.user_session
      })))
    );
  });
  
  it('handles GET_USER_REPOSITORIES', () => {
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
    
    const err = new ReferenceError('404');
    const generatorError = function () { throw err; };
    expect(generatorError).to.throw(err);
    
    expect(generator.next().value).to.deep.equal(
      call(doRequestGetRepositories, userAccess.user.username, userAccess.user.access_token)
    );

    expect(generator.next(userRepos).value).to.deep.equal(
      put(actions.receiveRepositories(fromJS({
        repositories: userRepos.repositories
      })))
    );
  });
  
  it('handles POST_CLOUD_PROVIDER_SSH_KEY', () => {
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
    const cloudProviderKey = {
      "key": {
        "id": 2,
        "name": "My key",
        "provider": "digital_ocean",
        "fingerprint": "00:11:22:33:44:55:66:77:88:99:aa:bb:cc:dd:ee:ff",
        "public_key": "ssh-rsa AAAAB3NzaC1yc2EAAAABIwAAAQEAklOUpkDHrfHY17SbrmTIpNLTGK9Tjom/BWDSUGPl+nafzlHDTYW7hdI4yZ5ew18JH4JW9jbhUFrviQzM7xlELEVf4h9lFX5QVkbPppSwg0cda3Pbv7kOdJ/MTyBlWXFCR+HAo3FXRitBqxiX1nKhXpHAZsMciLq8V6RjsNAQwdsdMFvSlVK/7XAt3FaoJoAsncM1Q9x5+3V0Ww68/eIFmb1zuUFljQJKprrX88XypNDvjYNby6vw/Pb0rwert/EnmZ+AW4OZPnTPI89ZPmVMLuayrD2cE86Z/il8b+gw3r3+1nKatmIkjn2so1d01QraTlMqVSsbxNrRFi9wrf+M7Q== schacon@mylaptop.local"
      }
    };
    
    const cloudProviderKeys = {
        "sshKeys": [
          {
            "id": 1,
            "name": "My little key",
            "provider": "digital_ocean",
            "fingerprint": "00:11:22:33:44:55:66:77:88:99:aa:bb:cc:dd:ee:ff",
            "public_key": "ssh-rsa AAAAB3NzaC1yc2EAAAABIwAAAQEAklOUpkDHrfHY17SbrmTIpNLTGK9Tjom/BWDSUGPl+nafzlHDTYW7hdI4yZ5ew18JH4JW9jbhUFrviQzM7xlELEVf4h9lFX5QVkbPppSwg0cda3Pbv7kOdJ/MTyBlWXFCR+HAo3FXRitBqxiX1nKhXpHAZsMciLq8V6RjsNAQwdsdMFvSlVK/7XAt3FaoJoAsncM1Q9x5+3V0Ww68/eIFmb1zuUFljQJKprrX88XypNDvjYNby6vw/Pb0rwert/EnmZ+AW4OZPnTPI89ZPmVMLuayrD2cE86Z/il8b+gw3r3+1nKatmIkjn2so1d01QraTlMqVSsbxNrRFi9wrf+M7Q== schacon@mylaptop.local"
          }
        ]
      };
      
    const authorization = "qphYSqjEFk1RcFxYqqIIFk4vaBJvDoBr3t9aHTp1JFEAO0NS7ECyLJJyUPybOUNf";
    
    const generator = postCloudProviderKey({
      'value': fromJS({
        'authorization': authorization,
        'access_token': userAccess.cloud_provider.access_token,
        'sshKeys': cloudProviderKeys.sshKeys,
        'sshKey': cloudProviderKey.key
      })
    });
    
    const err = new ReferenceError('404');
    const generatorError = function () { throw err; };
    expect(generatorError).to.throw(err);
    
    expect(generator.next().value).to.deep.equal(
      call(doRequestPostCloudProviderKey, userAccess.cloud_provider.access_token, authorization,  fromJS(cloudProviderKey.key))
    );
    
    expect(generator.next(cloudProviderKey).value).to.deep.equal(
      put(actions.setCloudProviderSshKeys(fromJS(
      {
        'sshKeys': cloudProviderKeys.sshKeys,
        'sshKey': [cloudProviderKey.key]
      })))
    );
  });
  
  it('handles POST_USER', () => {
    const user = {
      'user_signup': {
        'email': 'some@email.com',
        'password': 'somepassword'
      }
    };
    
    const userAccess = {
      'user_sesion': {
        'email': 'some@email.com',
        'token': 'GSjtfp4Gdrb5OovWSrVEwy78fe2IhbHmGcaYmSN8IQp5dxeJcH4wH8qDt3ut2Ulu'
      }
    };
    
    const generator = postUser({
      'value': fromJS({
        'user_signup': {
          'email': user.user_signup.email,
          'password': user.user_signup.password
        }
      })
    });
    
    const err = new ReferenceError('404');
    const generatorError = function () { throw err; };
    expect(generatorError).to.throw(err);
    
    expect(generator.next().value).to.deep.equal(
      call(doRequestPostUser, fromJS(user.user_signup))
    );
    
    expect(generator.next(user).value).to.deep.equal(
      put(actions.setUser(fromJS(
      {
        'user_sesion': user.user_sesion
      })))
    );
  });
  
  it('handles POST_USER_PROJECT', () => {
    const userProject = {
      "project": {
        "user_id": 1,
        "project_name": "tinkerware.com",
        "application_name": "Ghost",
        "server_provider": "digital_ocean",
        "configuration": {
          "server_name": "tinkerware.com",
          "nginx_remove_default_vhost": "true"
        },
        "repository": {
          "provider": "github",
          "username": "tinkerware",
          "name": "ghost-blog-site"
        },
        "keys": [{
          "id": 1,
          "fingerprint": "00:11:22:33:44:55:66:77:88:99:aa:bb:cc:dd:ee:ff"
        }]
      }
    };
    
    const userAccess = {
      'user_sesion': {
        'email': 'some@email.com',
        'token': 'GSjtfp4Gdrb5OovWSrVEwy78fe2IhbHmGcaYmSN8IQp5dxeJcH4wH8qDt3ut2Ulu'
      }
    };
    
    const userAuthorization = {
      'user_sesion': {
        'token': 'qphYSqjEFk1RcFxYqqIIFk4vaBJvDoBr3t9aHTp1JFEAO0NS7ECyLJJyUPybOUNf'
      }
    };
    
    const generator = postUserProject({
      'value': fromJS({
        "authorization": "qphYSqjEFk1RcFxYqqIIFk4vaBJvDoBr3t9aHTp1JFEAO0NS7ECyLJJyUPybOUNf",
        "user_project": {
          "user_id": 1,
          "project_name": "tinkerware.com",
          "application_name": "Ghost",
          "server_provider": "digital_ocean",
          "configuration": {
            "server_name": "tinkerware.com",
            "nginx_remove_default_vhost": "true"
          },
          "repository": {
            "provider": "github",
            "username": "tinkerware",
            "name": "ghost-blog-site"
          },
          "keys": [{
            "id": 1,
            "fingerprint": "00:11:22:33:44:55:66:77:88:99:aa:bb:cc:dd:ee:ff"
          }]
        }
      })
    });
    
    const err = new ReferenceError('404');
    const generatorError = function () { throw err; };
    expect(generatorError).to.throw(err);
    
    expect(generator.next().value).to.deep.equal(
      call(doRequestPostUserProject, fromJS(userProject.project), fromJS(userAuthorization.user_sesion.token))
    );
    
  });
});