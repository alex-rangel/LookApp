import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator, DrawerContent, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { colors} from "../src/styles/tema.json"
import Icon from "react-native-vector-icons/SimpleLineIcons"
import { Title } from "../src/componentes"

import Home from './pages/home'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import Feed from './pages/feed'
import Marketplace from './pages/marketplace';
import Category from './pages/marketplace/Category';
import Product from './pages/marketplace/product';
import Cart from './pages/Cart';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const CustomDrawer = (props)=>{
  return(
    <DrawerContentScrollView {...props}>
      <Title bold color='light' variant='big' hasPadding >LOOKAPP</Title>
      <DrawerItemList {...props}/>
    </DrawerContentScrollView>
  )
}

const MyDrawer = () => {
  return (
    <Drawer.Navigator 
    initialRouteName='Home' 
    drawerContent={props => <CustomDrawer {...props}/>}
    screenOptions={{ headerShown: false,
      drawerStyle:{
        backgroundColor: `${colors.black}`,
      }, 
      drawerActiveBackgroundColor: `${colors.danger}`,
      drawerActiveTintColor: `${colors.light}`,
      drawerInactiveTintColor:`${colors.gray50}`
    }}>
      <Drawer.Screen options={{drawerIcon:({focuses, color}) =>(
        <Icon name='people' color={color}/>
      ) }} 
      name="Feed" 
      component={Feed} />

            <Drawer.Screen options={{drawerIcon:({focuses, color}) =>(
        <Icon name='tag' color={color}/>
      ) }} 
      name="Marketplace" 
      component={Marketplace} />

            <Drawer.Screen options={{drawerIcon:({focuses, color}) =>(
        <Icon name='basket' color={color}/>
      ) }} 
      name="Orders" 
      component={Feed} />


    </Drawer.Navigator>
    
  );
}


const Rotas = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Cart' screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Signin" component={Signin} />
            <Stack.Screen name="Signup" component={Signup} />
            <Stack.Screen name="Feed" component={MyDrawer} />
            <Stack.Screen name="Category" component={Category} />
            <Stack.Screen name="Product" component={Product} />
            <Stack.Screen name="Cart" component={Cart} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Rotas

