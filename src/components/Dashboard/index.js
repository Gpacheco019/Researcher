import { Container } from "./styles";
import ListUsers from '../ListUsers';
import ModalRepo from '../ModalRepo';
import Results from '../Results';

import {useSelector} from 'react-redux';

export default function Dashboard() {
  const modal = useSelector(state => state.reducersModal.modal)
  
  return (
    <Container>
      <Results />
      {modal ? <ModalRepo /> : null }       
      <ListUsers className="ListUsers" />    
    </Container>
  )
}