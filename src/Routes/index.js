import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import StackNavigator from './Stack'
//import DrawerNavigator from './Drawer'

export default function Rotas() {
  return (
    <NavigationContainer>
        <StackNavigator/>
    </NavigationContainer>
  );
}