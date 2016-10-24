import { Map, fromJS } from 'immutable';
import { expect } from 'chai';
import automationSoftware from '../reducers/automationSoftware';

describe('reducer', () => {
  it('handles SET_AUTOMATION_SOFTWARE', () => {
    const initialState = Map();
    const action = {type: 'SET_AUTOMATION_SOFTWARE', value: 'ansible'};
    const nextState = automationSoftware(initialState, action);

    expect(nextState).to.equal(fromJS({
      automation_software: 'ansible'
    }));
  });
  it('handles DEFAULT', () => {
    const initialState = Map();
    const action = {type: ''};
    const nextState = automationSoftware(initialState, action);

    expect(nextState).to.equal(fromJS({
    }));
  });
});
