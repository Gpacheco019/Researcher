import styled from 'styled-components';

export const Content = styled.div`
  box-shadow: 0 15px 30px 1px grey;
  background: rgba(255, 255, 255, 0.90);
  text-align: center;
  border-radius: 5px;
  overflow: hidden;
  margin: 5em auto;
  height: 350px;
  width: 700px;

  @media screen and (max-width: 800px) {
    display: flex;
    flex-flow: row wrap;
    width: 480px;    
  }

`

export const ContainerImg = styled.div`  
  transition: all 0.3s ease-out;
  display: inline-block;
  position: relative;
  overflow: hidden;
  height: 100%;
  float: right;
  width: 45%;
  display: inline-block;

  img{
    width: 100%;
    height: 100%;
  }
`

export const ContainerInfo = styled.div`  
  position: relative;
  text-align: left;
  overflow: hidden;
  padding: 30px;
  height: 100%;
  float: left;
  width: 50%;
  
  h1{    
    display: inline-block;
    position: relative;
    font-size: 22px;
    color: #344055;
    margin: 0;
  }  

  p{    
    text-align: left;
    font-size: 15px;
    color: #7d7d7d;
  }

  button{    
    font-size: 15px;
    margin: 10px 5px;
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

    @media screen and (max-width: 765px) {
      display: flex;
      justify-content: center;      
      margin: 5px;
    }

  }

  @media screen and (max-width: 765px) {
    margin: 10px;
    padding: 0;
    font-size:10px;      
    
  }

`