import {Map, fromJS} from 'immutable';
import { expect } from 'chai';

import provisionName from '../reducers/provision';

describe('reducer', () => {
  it('handles SET_NAME', () => {
    const initialState = Map();
    const action = {type: 'SET_NAME', value: 'tinkerware.web'};
    const nextState = provisionName(initialState, action);

    expect(nextState).to.equal(fromJS({
      project_name: 'tinkerware.web'
    }));
  });
});
