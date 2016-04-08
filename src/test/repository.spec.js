import {Map, fromJS} from 'immutable';
import { expect } from 'chai';

import repository from '../reducers/repository';

describe('reducer', () => {
  it('handles SET_REPOSITORY_NAME', () => {
    const initialState = Map();
    const action = {type: 'SET_REPOSITORY_NAME', value: 'website'};
    const nextState = repository(initialState, action);

    expect(nextState).to.equal(fromJS({
      repository_name: 'website'
    }));
  });
  it('handles SET_GITHUB_USER_NAME', () => {
    const initialState = Map();
    const action = {type: 'SET_GITHUB_USER_NAME', value: 'ileonelperea'};
    const nextState = repository(initialState, action);

    expect(nextState).to.equal(fromJS({
      user_name: 'ileonelperea'
    }));
  });
});
