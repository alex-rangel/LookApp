import React, { useState, useContext} from "react"
import{ Box, Title, Text, Input, Spacer, Button} from "../../componentes"
import api from "../../services/api";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AppContext } from "../../Contexts/app"


const SignUp = ({navigation: {navigate, replace}}) => {

  const { setUsuario } = useContext(AppContext)
  
  const [user, setUser] = useState({
    email: '',
    password: ''
  })

  const requestLogin = async () =>{
    try {

      if(user.email === ''){
        alert('Informe o seu email')
        return false
      }
      
      if(user.password === ''){
        alert('Informe a sua senha')
        return false
      }

      const { data: users } = await api.get('/users',{
        params: {
          email: user.email,
          password: user.password
        }
      })
      
      const [loggedUser] = users
      if(!loggedUser){
        alert('User not found')
        return false
      }

      //STORE IN DEVICE
        await AsyncStorage.setItem('@user', JSON.stringify(loggedUser) )

      //PUT USER IN CONTEXT
        setUserContext(loggedUser)

      //GO TO FEED
        replace('Feed')

    } catch (error) {
      alert(error.message)
    }
  }


  return <Box background="light" justify="center" align="center" hasPadding>
             <Title bold variant="big">LOOKUP</Title>
             <Spacer/>
             <Text bold color="dark" >SignIn my account.</Text>
             <Spacer size="40px"/>
             <Input placeholder="E-mail" 
                placeholderTextColor="lightgray"
                value={user.email}
                onChangeText={email => {
                  setUser({
                    ...user,
                    email,
                  })
                }}
             />
             <Spacer/>
             <Input 
                placeholder="Password" 
                placeholderTextColor="lightgray" 
                value={user.password}
                onChangeText={password =>{
                  setUser({
                    ...user,
                    password,
                  })
                }}
              />
             <Spacer size="50px"/>
             <Button onPress={()=> requestLogin()} block><Text color="light">SignIn my account</Text></Button>  
             <Spacer/>
             <Text underline onPress={()=> navigate('Signup')}>Create new account</Text>
          </Box>
};


export default SignUp;