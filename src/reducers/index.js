import { combineReducers } from "redux";
import reducers  from './user.reducer';
import reducersModal from './modal.reducer';
import reducersLista from './lista.reducer';

export default combineReducers({
  reducers,
  reducersModal,
  reducersLista
})