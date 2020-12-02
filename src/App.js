import React from 'react'
import Routes from './routes/index'
import {BrowserRouter} from 'react-router-dom'
import GlobalStyle from './styles/global'

import Header from './components/Header'

function App() {
  return (
    <>
    <BrowserRouter>
      <Header />
      <GlobalStyle />
      <Routes />
    </BrowserRouter> 
    </>
  );
}

export default App;
