import { Map, fromJS } from 'immutable';
import { expect } from 'chai';
import serverProvider from '../reducers/serverProvider';

describe('reducer', () => {
  it('handles SET_SERVER_PROVIDER', () => {
    const initialState = Map();
    const action = {type: 'SET_SERVER_PROVIDER', value: fromJS({
        name: 'digital_ocean',
        token: '77e027c7447f468068a7d4fea41e7149a75a94088082c66fcf555de3977f69d3'
      })
    };
    const nextState = serverProvider(initialState, action);

    expect(nextState).to.equal(fromJS({
      server_provider: {
        name: 'digital_ocean',
        token: '77e027c7447f468068a7d4fea41e7149a75a94088082c66fcf555de3977f69d3'
      }
    }));
  });
  it('handles DEFAULT', () => {
    const initialState = Map();
    const action = {type: ''};
    const nextState = serverProvider(initialState, action);
    
    expect(nextState).to.equal(fromJS({
    }));
  });
});
