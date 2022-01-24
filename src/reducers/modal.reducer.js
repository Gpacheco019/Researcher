import actionTypes from '../constants/modal';

const INITIAL_STATE = {
  modal: false,
  repositorio: {}
}

export default function reducersModal(state = INITIAL_STATE, action) {
  switch(action.type) {
    case actionTypes.MODAL_VISIBLE:
      return {...state, modal: action.payload, repositorio: action.repositorio}
    default:
      return state
  }
}