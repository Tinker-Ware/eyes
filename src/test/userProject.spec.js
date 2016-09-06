import { Map, fromJS } from 'immutable';
import { expect } from 'chai';
import userProject from '../reducers/userProject';

describe('reducer', () => {
  
  it('handles SET_USER_PROJECT', () => {
    const initialState = Map();
    const action = {type: 'SET_USER_PROJECT', value: fromJS({
        "user_project": [
          {
            "id": "507f1f77bcf86cd799439011",
            "user_id": 1,
            "project_name": "tinkerware.com",
            "application_name": "simple_webpage",
            "server_provider": "digital_ocean",
            "configuration": {
              "server_name": "tinkerware.com",
              "nginx_remove_default_vhost": "true"
            },
            "repository": {
              "provider": "github",
              "username": "tinkerware",
              "name": "ghost-blog"
            },
            "keys": [{
              "id": 1,
              "fingerprint": "00:11:22:33:44:55:66:77:88:99:aa:bb:cc:dd:ee:ff"
            }]
          }
        ]
      })
    };
    const nextState = userProject(initialState, action);

    expect(nextState).to.equal(fromJS({
      "user_project": [
        {
          "id": "507f1f77bcf86cd799439011",
          "user_id": 1,
          "project_name": "tinkerware.com",
          "application_name": "simple_webpage",
          "server_provider": "digital_ocean",
          "configuration": {
            "server_name": "tinkerware.com",
            "nginx_remove_default_vhost": "true"
          },
          "repository": {
            "provider": "github",
            "username": "tinkerware",
            "name": "ghost-blog"
          },
          "keys": [{
            "id": 1,
            "fingerprint": "00:11:22:33:44:55:66:77:88:99:aa:bb:cc:dd:ee:ff"
          }]
        }
      ]
    }));
  });

  it('handles REQUEST_POST_USER_PROJECT_FAILED', () => {
    const initialState = Map();
    const action = {type: 'REQUEST_POST_USER_PROJECT_FAILED', value: fromJS({
        "error": {
            "error": "404"
          }
      })
    };
    const nextState = userProject(initialState, action);

    expect(nextState).to.equal(fromJS({
      "request_post_user_project_failed": {
        "error": "404"
      }
    }));
  });
  
  it('handles DEFAULT', () => {
    const initialState = Map();
    const action = {type: ''};
    const nextState = userProject(initialState, action);
    
    expect(nextState).to.equal(fromJS({
    }));
  });
  
});
