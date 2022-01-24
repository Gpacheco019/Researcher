import React from 'react';
import {Modal} from './styles'
import {Container} from './styles'
import { useDispatch } from 'react-redux';
import { actions } from '../../actions/modal.actions';
import { useSelector } from 'react-redux';

export default function ModalRepo(){
  const repositorios = useSelector(state => state.reducersModal.repositorio)  
  const dispatch = useDispatch();

  return(
    <Modal>
      <Container>
        <button onClick={() => dispatch(actions.modalVisible(false, {}))} className="close">X</button>
        <div className='content'>
          <h1>Lista de Repositórios</h1>       
        </div>
        <div className='content-list'>
          <ul>
            {repositorios.map(repositorio => (
              <li key={repositorio.id}>
                <a href={repositorio.html_url} target="_blank" rel="noreferrer">
                  {repositorio.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </Modal>
  )
}