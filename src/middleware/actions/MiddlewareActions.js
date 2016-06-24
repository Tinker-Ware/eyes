import * as types from '../../constants/ActionTypes';

export function receiveRepository(repository){
  return {
    type: types.SET_INTEGRACION,
    value: repository
  };
}