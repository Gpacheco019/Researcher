import { Container } from "./styles";
import { Content } from './styles';

import InputPesquisa from "../InputPesquisa";

export default function Header() {
  return (
    <Container>
      <Content>
        <InputPesquisa />        
      </Content>
    </Container>
  )
}