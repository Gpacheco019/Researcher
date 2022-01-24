import actionTypes from '../constants/modal'

const actions = {
  modalVisible: (boolean, repo) => ({
    type: actionTypes.MODAL_VISIBLE,
    payload: boolean,
    repositorio: repo
  })
}

export {actions}