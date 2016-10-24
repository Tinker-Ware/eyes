import "babel-polyfill";
import { expect } from 'chai';
import { call, put } from 'redux-saga/effects';
import { fromJS } from 'immutable';
import * as actions from '../actions/MiddlewareActions';
import { doRequestGetCloudProviderAccess, doRequestPostUser, doRequestPostUserProject, doRequestGetRefreshSession, doRequestGetRepositories, doRequestGetRepositoryAccess, doRequestGetCloudProviderKeys, doRequestGetUserSesion, doRequestPostCloudProviderKey, getCloudProviderAccess, getCloudProviderKeys, getRepositoryAccess, getUserSesion, getUserRepositories, postCloudProviderKey, postUser, postUserProject, refreshSession, refreshUserSesion } from '../sagas';

describe('sagas middleware', () => {
  it('handles REQUEST_CLOUD_PROVIDER_ACCESS', () => {
    const userAccess = {
      "oauth_request": {
        "user_id": 1,
        "code": "8d1ea094fc64181b88db"
      }
    };
    const authorization = "qphYSqjEFk1RcFxYqqIIFk4vaBJvDoBr3t9aHTp1JFEAO0NS7ECyLJJyUPybOUNf";
    const generator = getCloudProviderAccess({
      value:
      fromJS({
        "authorization": authorization,
        "oauth_request": userAccess.oauth_request
       })
     });
    const err = new ReferenceError('404');
    const generatorError = function () { throw err; };
    expect(generatorError).to.throw(err);
    expect(generator.next().value).to.deep.equal(
      call(doRequestGetCloudProviderAccess, authorization, fromJS(userAccess.oauth_request))
    );
    const cloudProviderAccess = {
      callback: {
        "provider": "digitalocean",
        "username": "ileonelperea"
      }
    };
    expect(generator.next(cloudProviderAccess).value).to.deep.equal(
      put(actions.setCloudProviderAccess(fromJS({
          cloud_provider: cloudProviderAccess.callback
        })))
    );
    const userAccess2 = {
      value: fromJS({
        "authorization": authorization,
        "oauth_request": {
          "user_id": userAccess.oauth_request.user_id
        }
       })
     };
    expect(generator.next(userAccess2).value).to.deep.equal(
     put(actions.requestPostProviderKey(fromJS({
       'authorization': authorization,
       'user_id': userAccess.oauth_request.user_id,
       'sshKeys': [],
       'sshKey': {
         'name': 'deploy_key',
         'public_key': 'ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAACAQCtmlfAafr14dY5WPFtZV7GpVwgp6/atw7eonjhWfWZfHFmx2TTpUGUbH4o+Z6VI+9GImcpnk+8S/OLSCIT0ueQ6xxqnP6tdREaSZAMyB0f7vGxnuOv3n/sqyFlio1rzaysQv11AFML2QmxR0mNqjODAkwqDGPvbD1qyUDXT33YW9xRf5TJ7oJ4GnRXVArAvQdTa7tWOYCseQsUSkmsJXzcOkEAGfUkJSrvpss8FlfksVV2M4OL5qeNWMfuqY8sKyTcxCBpbpeBClIx2Z7l9iNxPyTXyo7Ma+65SwPVYCUNM5vRy77miGZhLuZDVwdXqD1VnlTCQhppPUh1R9+IxWMRbomNCxPOJtuj2Q7dB5oY990Heg58yLCv2LdVhY7OM+2lUksBoTrQkpjMMMfPxwU/6l9Eiq4KiX0BIZIPQFbbE33yfaLmKEwOcVBYflS3t/yJAFDUecPC3j488HpY23yMPXiredRaGebbXGiVBKOp6zjftFJzes1PvWmP+XiAq52uGiTH2mzlMrlzd4Jpfegy6uGl4r58LkLJOInl89XWYsxHlzC+1pPhSbmYCJvv//0P4O8afSUgjlRBBfiyOo1+mE9m5BcgEGd6ZbtF7mVAAoqgXx2kSdMglt9+WV0/X+TF/G0QBCpMeBqvrWKTwDDtaWlcEeBE/C5ObIledyKpjw== tinkerwareio@gmail.com'
       }
      })))
    );
    expect(generator.next(userAccess2).value).to.deep.equal(
      put(actions.requestCloudProviderKeys(fromJS({
          authorization: authorization,
          user_id: userAccess.oauth_request.user_id
        })))
    );
  });
  it('handles REQUEST_CLOUD_PROVIDER_KEYS', () => {
    const userAccess = {
      user: {
        "id": 1,
        "username": "tinkerware",
        "authorization": "GSjtfp4Gdrb5OovWSrVEwy78fe2IhbHmGcaYmSN8IQp5dxeJcH4wH8qDt3ut2Ulu"
      }
    };
    const cloudProviderKeys = {
      "ssh_keys": [
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
        'user_id': userAccess.user.id,
        'authorization': authorization
      })
    });
    const err = new ReferenceError('404');
    const generatorError = function () { throw err; };
    expect(generatorError).to.throw(err);
    expect(generator.next().value).to.deep.equal(
      call(doRequestGetCloudProviderKeys, authorization, userAccess.user.id)
    );
    expect(generator.next(cloudProviderKeys).value).to.deep.equal(
      put(actions.setCloudProviderSshKeys(fromJS({
        sshKeys: [],
        sshKey: cloudProviderKeys.ssh_keys
      })))
    );
  });

  it('handles REQUEST_GITHUB_ACCESS', () => {
    const userAccess = {
      "oauth_request": {
        "user_id": 1,
        "code": "8d1ea094fc64181b88db"
      }
    };
    const authorization = "qphYSqjEFk1RcFxYqqIIFk4vaBJvDoBr3t9aHTp1JFEAO0NS7ECyLJJyUPybOUNf";
    const generator = getRepositoryAccess({
      value:
      fromJS({
        "authorization": authorization,
        "oauth_request": userAccess.oauth_request
       })
     });
    const err = new ReferenceError('404');
    const generatorError = function () { throw err; };
    expect(generatorError).to.throw(err);
    expect(generator.next().value).to.deep.equal(
      call(doRequestGetRepositoryAccess, authorization, fromJS(userAccess.oauth_request))
    );
    const repositoryAccess = {
      callback: {
        "provider": "github",
        "username": "ileonelperea"
      }
    };
    expect(generator.next(repositoryAccess).value).to.deep.equal(
      put(actions.receiveRepositoryAccess(fromJS({
          integration: repositoryAccess.callback
        })))
    );
  });

  it('handles REQUEST_GITHUB_REPOSITORIES', () => {
    const userAccess = {
      user: {
        "id": 1,
        "username": "tinkerware",
        "authorization": "GSjtfp4Gdrb5OovWSrVEwy78fe2IhbHmGcaYmSN8IQp5dxeJcH4wH8qDt3ut2Ulu"
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
        'authorization': userAccess.user.authorization
      })
    });
    const err = new ReferenceError('404');
    const generatorError = function () { throw err; };
    expect(generatorError).to.throw(err);
    expect(generator.next().value).to.deep.equal(
      call(doRequestGetRepositories, userAccess.user.username, userAccess.user.authorization)
    );
    expect(generator.next(userRepos).value).to.deep.equal(
      put(actions.receiveRepositories(fromJS({
        repositories: userRepos.repositories
      })))
    );
  });

  it('handles REQUEST_POST_CLOUD_PROVIDER_KEY', () => {
    const userAccess = {
      user: {
        "id": 1,
        "username": "tinkerware",
        "authorization": "GSjtfp4Gdrb5OovWSrVEwy78fe2IhbHmGcaYmSN8IQp5dxeJcH4wH8qDt3ut2Ulu"
      }
    };
    const cloudProviderKey = {
      "ssh_key": {
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
        'user_id': userAccess.user.id,
        'sshKeys': cloudProviderKeys.sshKeys,
        'sshKey': cloudProviderKey.ssh_key
      })
    });
    const err = new ReferenceError('404');
    const generatorError = function () { throw err; };
    expect(generatorError).to.throw(err);
    expect(generator.next().value).to.deep.equal(
      call(doRequestPostCloudProviderKey, authorization, userAccess.user.id,  fromJS(cloudProviderKey.ssh_key))
    );
    expect(generator.next(cloudProviderKey).value).to.deep.equal(
      put(actions.setCloudProviderSshKeys(fromJS(
      {
        'sshKeys': cloudProviderKeys.sshKeys,
        'sshKey': [cloudProviderKey.ssh_key]
      })))
    );
  });

  it('handles REQUEST_POST_USER_PROJECT', () => {
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

  it('handles REQUEST_POST_USER', () => {
    const user = {
      'user_signup': {
        'email': 'some@email.com',
        'password': 'somepassword'
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
        'user_session': user.user_sesion
      })))
    );
  });

  it('handles REQUEST_REFRESH_USER_SESSION', () => {
    const userAccess = {
      "user_session": {
        'email': 'some@email.com',
        "token": "GSjtfp4Gdrb5OovWSrVEwy78fe2IhbHmGcaYmSN8IQp5dxeJcH4wH8qDt3ut2Ulu"
      }
    };
    const generator = refreshSession({
      'value': fromJS({
        "authorization": userAccess.user_session.token
      })
    });
    const err = new ReferenceError('404');
    const generatorError = function () { throw err; };
    expect(generatorError).to.throw(err);
    expect(generator.next().value).to.deep.equal(
      call(doRequestGetRefreshSession, userAccess.user_session.token)
    );
    expect(generator.next(userAccess.user_session).value).to.deep.equal(
      call(refreshUserSesion, userAccess.user_session)
    );
  });

  it('handles REQUEST_USER_SESION', () => {
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
    expect(generator.next(userAccess.user_session).value).to.deep.equal(
      call(refreshUserSesion, userAccess.user_session)
    );
  });
});
