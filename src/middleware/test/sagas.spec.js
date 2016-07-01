import 'whatwg-fetch';
import "babel-polyfill";
import {expect} from 'chai';
import { takeLatest } from 'redux-saga';
import { call, put, fork } from 'redux-saga/effects'; 
import * as actions from '../actions/MiddlewareActions';
import { doRequest, getRepositoryAccess, getRepositories } from '../sagas';

describe('sagas middleware', () => {
  it('handles GET_REPOSITORY_ACCESS', () => {
    const generator = getRepositoryAccess();
    const userAccessToken = {
      "user": {
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
    
    expect(generator.next().value).to.deep.equal(
      call(doRequest,"http://localhost:3100/api/v1/repository/gh_callback",
      {
        method: 'GET',
        mode: 'cors'
      })
    );
    
    expect(generator.next(userAccessToken).value).to.deep.equal(
      put(actions.receiveRepository("77e027c7447f468068a7d4fea41e7149a75a94088082c66fcf555de3977f69d3"))
    );
    
    expect(generator.next().value).to.deep.equal(
      call(getRepositories)
    );
    
    expect(generator.next(userRepos).value).to.deep.equal(
      put(actions.receiveRepositories(userRepos))
    );
    
    expect(generator.next().value).to.deep.equal(
      put(actions.showRepositories(true))
    );
  });
});