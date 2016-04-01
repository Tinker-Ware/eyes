import {Map, fromJS} from 'immutable';
import { expect } from 'chai';

import application from '../reducers/application';

describe('reducer', () => {
  it('handles SET_APPLICATION', () => {
    const initialState = Map();
    const action = {type: 'SET_APPLICATION', value: 'ghost'};
    const nextState = application(initialState, action);

    expect(nextState).to.equal(fromJS({
      application_name: 'ghost'
    }));
  });
});
