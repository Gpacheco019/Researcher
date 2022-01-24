import React from 'react';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import { GlobalStyle } from './styles/global';
import { Provider } from 'react-redux'
import store from './store'

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

function App() {
  return (
    <div className="App">     
      <Provider store={store}>
        <Header />
        <Dashboard />
        <GlobalStyle />
        <ToastContainer />
      </Provider>
      
    </div>
  );
}

export default App;
