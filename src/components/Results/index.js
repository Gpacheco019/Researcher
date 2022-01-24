import React from 'react';
import { Content } from "./styles";
import {ContainerImg} from './styles';
import {ContainerInfo} from './styles';
import { useDispatch } from 'react-redux';
import { actions } from '../../actions/modal.actions';
import { actions as actionsLista} from '../../actions/lista.action';
import { toast } from 'react-toastify';


import axios from 'axios';

import { useSelector } from "react-redux";

export default function Results(){
  const users = useSelector(state => state.reducers.users)
  const usersFavorite = useSelector(state => state.reducersLista.favoriteUsers)

  const dispatch = useDispatch();

  const handleModal = async () => {
    await axios
      .get(`https://api.github.com/users/${users.login}/repos`)
      .then(response =>  {
        dispatch(actions.modalVisible(true, response.data))
      })
  }

  const handleAddUser =  (name, id) => {
    let favorite = {
      nome: name,
      id: id
    }
    if(usersFavorite.length > 0){
      if(usersFavorite.find(user => user.id === favorite.id)){
        toast.error('Usuário ja foi adicionado!')
      }else{
        dispatch(actionsLista.adicionarUsuario(favorite))
      }      
    }else{
      dispatch(actionsLista.adicionarUsuario(favorite))
    }    
    
  }  

  return(
    <Content>
      <ContainerImg>
          <img src={users.avatar_url} alt={users.name} />
      </ContainerImg>
      <ContainerInfo>
        <h1>{users.name}</h1>
        <p><strong>Usuário:</strong> {users.login}</p>
        <p><strong>Empresa atual:</strong> {users.company}</p>
        <p><strong>Total de Repositórios:</strong> {users.public_repos}</p>
        <p><strong>Total de followers:</strong> {users.followers}</p>
        <p><strong>Total de following:</strong> {users.following}</p>
        <button onClick={() => handleAddUser(users.name, users.id)}>Favoritar</button>        
        <button onClick={handleModal}>Ver Repositórios</button>              
      </ContainerInfo>          
    </Content>
  )
}