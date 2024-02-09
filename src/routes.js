import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { colors} from "../src/styles/tema.json"
import Icon from "react-native-vector-icons/SimpleLineIcons"

import Home from './pages/home'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import Feed from './pages/feed'

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const MyDrawer = () => {
  return (
    <Drawer.Navigator 
    initialRouteName='Home' 
    screenOptions={{ headerShown: false,
      drawerStyle:{
        backgroundColor: `${colors.black}`,
      }, 
      drawerActiveBackgroundColor: `${colors.danger}`,
      drawerActiveTintColor: `${colors.light}`,
      drawerInactiveBackgroundColor:`${colors.gray50}`
    }}>
      <Drawer.Screen options={{drawerIcon:({focuses, color}) =>(
        <Icon name='people' color={color}/>
      ) }} 
      name="Feed" 
      component={Feed} />
    </Drawer.Navigator>
  );
}


const Rotas = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Home' screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Signin" component={Signin} />
            <Stack.Screen name="Signup" component={Signup} />
            <Stack.Screen name="Feed" component={MyDrawer} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Rotas

