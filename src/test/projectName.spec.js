import {Map, fromJS} from 'immutable';
import { expect } from 'chai';

import projectName from '../reducers/projectName';

describe('reducer', () => {
  it('handles SET_NAME', () => {
    const initialState = Map();
    const action = {type: 'SET_NAME', value: 'tinkerware.web'};
    const nextState = projectName(initialState, action);

    expect(nextState).to.equal(fromJS({
      project_name: 'tinkerware.web'
    }));
  });
});
