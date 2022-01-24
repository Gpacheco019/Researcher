import React from 'react';
import { Container } from './styles';
import Favoritos from '../Favoritos';
import { useSelector } from 'react-redux';

export default function ListUser(){
  const usersFavorite = useSelector(state => state.reducersLista.favoriteUsers)
    
  return (
    <Container>
      <h1>Lista de usuários Favoritados</h1>
      {usersFavorite.map(user => (
        <Favoritos key={user.id} user={user} />
      ))}      
    </Container>
  )
}