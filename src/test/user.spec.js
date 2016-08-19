import { Map, fromJS } from 'immutable';
import { expect } from 'chai';
import user from '../reducers/user';

describe('reducer', () => {
  
  it('handles SET_USER', () => {
    const initialState = Map();
    const action = {type: 'SET_USER', value: fromJS({
      "user": {
        "id": 1,
        "name": "Leonel Roberto",
        "username": "iLeonelRoberto",
        "email": "some@email.com"
      }
      })
    };
    const nextState = user(initialState, action);

    expect(nextState).to.equal(fromJS({
      "user": {
        "id": 1,
        "name": "Leonel Roberto",
        "username": "iLeonelRoberto",
        "email": "some@email.com"
      }
    }));
  });
  
  it('handles SET_USER_INFORMATION', () => {
    const initialState = Map();
    const action = {type: 'SET_USER_INFORMATION', value: fromJS({
        "user_information": {
          "user_id": 1,
          "phone_number": "1234567890",
          "address": "somewhere over the rainbow",
          "company": "tinkerware"
        }
      })
    };
    const nextState = user(initialState, action);

    expect(nextState).to.equal(fromJS({
      "user_information": {
        "user_id": 1,
        "phone_number": "1234567890",
        "address": "somewhere over the rainbow",
        "company": "tinkerware"
      }
    }));
  });
  
  it('handles SET_USER_SESION', () => {
    const initialState = Map();
    const action = {type: 'SET_USER_SESION', value: fromJS({
        "user_sesion": {
          "username": "iLeonelRoberto",
          "token": "GSjtfp4Gdrb5OovWSrVEwy78fe2IhbHmGcaYmSN8IQp5dxeJcH4wH8qDt3ut2Ulu"
        }
      })
    };
    const nextState = user(initialState, action);

    expect(nextState).to.equal(fromJS({
      "user_sesion": {
        "username": "iLeonelRoberto",
        "token": "GSjtfp4Gdrb5OovWSrVEwy78fe2IhbHmGcaYmSN8IQp5dxeJcH4wH8qDt3ut2Ulu"
      }
    }));
  });
  
  it('handles SET_USER_SESION_EMAIL', () => {
    const initialState = Map();
    const action = {type: 'SET_USER_SESION_EMAIL', value: fromJS({
        "user_sesion_email": "some@email.com"
      })
    };
    const nextState = user(initialState, action);

    expect(nextState).to.equal(fromJS({
      "user_sesion_email": "some@email.com"
    }));
  });
  
  it('handles SET_USER_SESION_PASSWORD', () => {
    const initialState = Map();
    const action = {type: 'SET_USER_SESION_PASSWORD', value: fromJS({
        "user_sesion_password": "somepassword"
      })
    };
    const nextState = user(initialState, action);

    expect(nextState).to.equal(fromJS({
      "user_sesion_password": "somepassword"
    }));
  });
  
  it('handles DEFAULT', () => {
    const initialState = Map();
    const action = {type: ''};
    const nextState = user(initialState, action);
    
    expect(nextState).to.equal(fromJS({
    }));
  });
});
