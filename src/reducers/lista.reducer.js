import actionTypes from '../constants/lista';

const INITIAL_STATE = { 
  favoriteUsers:[] 
}

export default function reducersLista(state = INITIAL_STATE, action) {
  switch(action.type) {
    case actionTypes.REMOVER_USUARIO:
      return { favoriteUsers: state.favoriteUsers.filter(x => x.id !== action.payload.id) }
    case actionTypes.ADICIONAR_USUARIO:
      return { favoriteUsers: [...state.favoriteUsers, {...action.payload}] }     
      
    default:
      return state
  }
}