import React, { useState } from "react"
import{ Box, Title, Text, Input, Spacer, Button} from "../../componentes"

import api from "../../services/api";

const SignUp = ({ navigation: { navigate,replace } }) => {
  const[user, setUser] = useState({
      name: '',
      email: '',
      password: ''
  })

    const addUser = async() => {
      const { data:newUser } = await api.post('/users',{
        params: {
          name: user.name,
          email: user.email,
          password: user.password
        }
      })
      replace('Signin')
    }


  return <Box background="light" justify="center" align="center" hasPadding>
             <Title bold>Create new account.</Title>
             <Spacer/>
             <Text>Enter your details below:</Text>
             <Spacer size="40px"/>
             <Input 
                placeholder="Nome" 
                placeholderTextColor="lightgray"
                value={user.name}
                onChangeText={name => {
                  setUser({
                    ...user,
                    name,
                  })
                }}
              />
             <Spacer/>
             <Input 
                placeholder="E-mail" 
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
                onChangeText={password => {
                  setUser({
                    ...user,
                    password,
                  })
                }}  
              />
             <Spacer size="50px"/>
             <Button block onPress={()=> addUser()}><Text color="light">Create new account</Text></Button>  
             <Spacer/>
             <Text underline onPress={()=> replace('Signin')}>Back to signin</Text>
          </Box>
};


export default SignUp;