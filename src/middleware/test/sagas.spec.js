import 'whatwg-fetch';
import "babel-polyfill"
import {expect} from 'chai';
import { takeLatest } from 'redux-saga';
import { call, put, fork } from 'redux-saga/effects'; 
import * as actions from '../actions/MiddlewareActions';
import { doRequest, getRepositoryAccess } from '../sagas';

describe('sagas middleware', () => {
  it('handles SET_REPOSITORIES', () => {
    const generator = getRepositoryAccess();
    
    expect(generator.next().value).to.deep.equal(
      call(doRequest,"http://localhost:3100/api/v1/repository/gh_callback",
      {
        method: 'GET',
        mode: 'cors'
      })
    );

  });
});