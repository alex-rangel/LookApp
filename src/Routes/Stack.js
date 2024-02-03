import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../pages/home'
import Signin from '../pages/Signin'
import Signup from '../pages/Signup'
import Feed from '../pages/feed'

const Stack = createStackNavigator();

export default function Rotas() {
  return (
    
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Signin" component={Signin} />
            <Stack.Screen name="Signup" component={Signup} />
            <Stack.Screen name="Feed" component={Feed} />
        </Stack.Navigator>
    
  );
}