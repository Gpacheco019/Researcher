import actionTypes from "../constants/lista"

const actions = {
  removerUsuario: usuario => ({
    type: actionTypes.REMOVER_USUARIO,
    payload: usuario
  }),
  adicionarUsuario: usuario => ({
    type: actionTypes.ADICIONAR_USUARIO,
    payload: usuario
  })
}

export {actions}