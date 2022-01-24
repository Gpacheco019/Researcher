import React from 'react';
import {Container} from './styles';
import {actions as actionsList} from '../../actions/lista.action';
import {useDispatch} from 'react-redux';

export default function Favoritos({user}){
  
  const dispatch = useDispatch();

  const handleRemove = () => {    
    dispatch(actionsList.removerUsuario(user));
  }

  return(
    <Container>      
      <ul>        
        <li>
          <strong>Usuário: </strong> {user.nome}
          <button onClick={handleRemove}>Remover</button>
        </li>             
      </ul>
    </Container>
  )
}