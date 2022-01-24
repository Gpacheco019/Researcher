import { Input } from './styles';
import { Button } from './styles';
import { Content } from './styles';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { actions } from '../../actions/user.actions';

import { toast } from 'react-toastify';
import axios from 'axios';

export default function InputPesquisa() {  
  const [userValue, setUserValue] = useState('');
 
  const dispatch = useDispatch();

  const handleChangeValue = (event) => {
    
    const { value } = event.target;
    setUserValue(value);
  }

  
  const handleTakeValue = async () => {
    await axios
            .get(`https://api.github.com/users/${userValue}`)
            .then(response => {              
              dispatch(actions.buscarUsuario(response.data));
              toast.success(`${userValue} foi encontrado.`);
            })
            .catch(error =>{
              console.log(error)
              toast.error('Não foi possivel achar usuário!');
            })
  }

  return(
    <Content>
      <Input onChange={handleChangeValue} type="text" value={userValue} placeholder="Digite o nome do usuário" />
      <Button onClick={handleTakeValue}>Pesquisar</Button>      
    </Content>        
    
  );
}



