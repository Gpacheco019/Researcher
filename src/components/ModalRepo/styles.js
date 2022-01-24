import styled from 'styled-components';

export const Modal = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  background: var(--background-modal-overlay);

  display: flex;
  justify-content: center;
  align-items: center;
` 

export const Container = styled.div`  

  background: var(--background-modal);
  width: 60%;
  height: 60%; 
  position: absolute;  
  border: none;
  border-radius: 0.8rem;

  button {
    width: 35px;
    height: 35px;
    padding: 0.8rem;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 5px;
    right: 5px;
    border: none;
    border-radius: 50%;

    transition: filter 0.2s;
    background: #f45a5d;
    color: #ffffff;

    cursor: pointer;

    &:hover{
      filter: brightness(0.9);
    }
  }

  .content h1 {
    display: flex;
    justify-content: center;
    margin: 5px;
  }
  .content-list{
    height: 90%; 
    overflow: auto;


  }
  .content-list li a{
    text-decoration: none;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 30px 25px 25px 25px;
    transition: filter 0.2s;

    color: #fff;
    background: var(--button);
    height: 55px;
    border-radius: 0.4rem;
    cursor: pointer;
    
    & + li {
      margin: 25px;
    }    
    
  }

  li:hover{
    filter: brightness(0.9);
  }

  @media screen and (max-width: 760px) {
    .content h1 {
      text-align: center;
      margin:20px 20px 0px 20px;
    }
    
    button{
     top: 3px;
     right: 3px;
    }

    .content-list{
      height: 75%; 
      overflow: auto;
    }
  }

` 