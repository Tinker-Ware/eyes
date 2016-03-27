import {Map, fromJS} from 'immutable';
import { expect } from 'chai';

import serverProvider from '../reducers/serverProvider';

describe('reducer', () => {
  it('handles SET_SERVER_PROVIDER', () => {
    const initialState = Map();
    const action = {type: 'SET_SERVER_PROVIDER', value: 'digital_ocean'};
    const nextState = serverProvider(initialState, action);

    expect(nextState).to.equal(fromJS({
      server_provider: 'digital_ocean'
    }));
  });
});
