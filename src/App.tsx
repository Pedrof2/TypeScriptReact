import {
  ChakraProvider,
} from '@chakra-ui/react'

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';
import { AppContextProvider } from './components/AppContext';
import MainRoutes from './services/routes';



function App() {


  return (
    <BrowserRouter>
      <AppContextProvider> 
        <ChakraProvider>
          <Layout>
           <MainRoutes/>
          </Layout>
        </ChakraProvider>
      </AppContextProvider>
    </BrowserRouter>

  );
}

export default App;
