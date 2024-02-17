import 'react-native-gesture-handler';
import React from 'react';

import { Spacer } from './src/componentes'; 
import Rotas from './src/routes'

import ContextProvider from './src/Contexts/app'; 

const Context = () => {
  return(
    <ContextProvider>
      <Rotas/>
    </ContextProvider>
  ) 
  
}


export default function App() {
  return (
    
      <Context/>
      
      );
}


