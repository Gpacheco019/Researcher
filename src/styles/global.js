import  { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

  :root{
    --background: #711BB3;
    --button:  #bf90e5;
    --text-title: #363f5f;
    --text-body: #969cb3;
    --background-modal-overlay: rgba(0, 0, 0, 0.8);
    --background-modal: #fff;

  }

  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  body::-webkit-scrollbar {
  width: 2px;               
  }

`