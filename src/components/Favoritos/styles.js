import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;    

  ul{    
    list-style-type: none;
  }

  li {    
    display: grid;
    grid-template-columns: repeat(3, 1fr);   
    background: #AC82CE;    
    width: 800px;
    border-radius: 0 0.5rem 0.5rem 0.5rem;    
    margin-top: 1rem;
    min-height: 3rem;
    padding: 1rem 1rem 1rem 3rem;
    

    button {
      font-size: 1em;      
      padding: 0.4rem 0.8rem;
      border: none;
      border-radius: 0.4rem;
      transition: filter 0.2s;

      background: #f45a5d;
      color: #ffffff;

      cursor: pointer;

      &:hover{
        filter: brightness(0.9);
      }
    }
  }

  @media screen and (max-width: 800px) {
    li {
      position: relative;
      display: flex;
      width: 600px
    }
    button {
      position: absolute;
      right:10px;
      top: 10px;
      display: flex;
      
    }  
  }

  @media screen and (max-width: 540px) {
    li {
      position: relative;
      display: flex;
      width: 480px
    }
    
    button {
      position: absolute;
      right:10px;
      top: 10px;
      display: flex;
      
    }  
  }

  
`