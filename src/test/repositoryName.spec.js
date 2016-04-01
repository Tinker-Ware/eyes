import {Map, fromJS} from 'immutable';
import { expect } from 'chai';

import repositoryName from '../reducers/repositoryName';

describe('reducer', () => {
  it('handles SET_REPOSITORY_NAME', () => {
    const initialState = Map();
    const action = {type: 'SET_REPOSITORY_NAME', value: 'website'};
    const nextState = repositoryName(initialState, action);

    expect(nextState).to.equal(fromJS({
      repository_name: 'website'
    }));
  });
});
