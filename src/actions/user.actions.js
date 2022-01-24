import actionTypes from '../constants/users';

const actions = {
  buscarUsuario: usuario => ({
    type: actionTypes.BUSCAR_USUARIO,
    payload: usuario
  })
  // removerUsuario: usuario => ({
  //   type: actionTypes.REMOVER_USUARIO,
  //   payload: usuario
  // }),
  // adicionarUsuario: usuario => ({
  //   type: actionTypes.ADICIONAR_USUARIO,
  //   payload: usuario
  // })

};

export {actions};

