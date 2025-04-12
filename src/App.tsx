import {
  Button,
  ChakraProvider,
} from '@chakra-ui/react'

import { Card } from './components/Card';
import { createContext, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Conta from './pages/Conta';
import { Layout } from './components/Layout';
import ContaInfo from './pages/ContaInfo';
import { AppContextProvider } from './components/AppContext';



function App() {


  return (
    <BrowserRouter>
      <AppContextProvider> 
        <ChakraProvider>
          <Layout>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/conta/:id' element={<Conta />} />
              <Route path='/infoConta' element={<ContaInfo />} />
            </Routes>
          </Layout>
        </ChakraProvider>
      </AppContextProvider>
    </BrowserRouter>

  );
}

export default App;
