import styled from 'styled-components';


export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 556px) {
    display: flex;
    flex-flow: row wrap;    
  }
`

export const Input = styled.input`
  width: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  border: none;
  padding: 0.6rem;
  border-radius: 0.4rem;  
`

export const Button = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.4rem 0.8rem;
  border: none;
  border-radius: 0.4rem;
  transition: filter 0.2s;

  background: var(--button);
  color: #ffffff;

  cursor: pointer;

  &:hover{
    filter: brightness(0.9);
  }
`