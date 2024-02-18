import React, { useState } from "react"
import{ ActivityIndicator } from "react-native"
import{ Box, Title, Text, Input, Spacer, Button} from "../../componentes"
import api from "../../services/api";


const SignUp = ({navigation: {navigate, replace}}) => {

  const [loading, setLoading] = useState(false)
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '' 
  })

  const requestSignup = async () =>{

    setLoading(true)

    try {

      if( user.name === '' ||
          user.email === '' || 
          user.password === '' 
        ){
        alert('Preencha todos os campos')
        setLoading(false)
        return false
      }

      const { data: users } = await api.post('/users',user)

      if (!users){
        setLoading(false)
        alert('não foi possivel cadastrar o usuario')
        return false
      }

      //GO TO Signin
        replace('Signin')

    } catch (error) {
      alert(error.message)
    }
  

  }

  

  return <Box background="light" justify="center" align="center" hasPadding>
             <Title bold>Create new account.</Title>
             <Spacer/>
             <Text>Enter your details below:</Text>
             <Spacer size="40px"/>
             <Input 
              placeholder="name"
              editable={!loading} 
              placeholderTextColor="lightgray"
              value={user.Nome}
              onChangeText={name =>{
                setUser({
                  ...user,
                  name,
                })
              }}
              />
             <Spacer/>
             <Input 
              placeholder="email"  
              editable={!loading} 
              placeholderTextColor="lightgray"
              value={user.email}
              onChangeText={email =>{
                setUser({
                  ...user,
                  email,
                })
              }}
              />
             <Spacer/>
             <Input 
              placeholder="password" 
              editable={!loading} 
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

             {loading && <ActivityIndicator size='large'/>}
             
             { !loading && <>
              <Button onPress={() => requestSignup()} block><Text color="light">Create new account</Text></Button>  
             <Spacer/>
             <Text underline onPress={()=> navigate('Signin')}>Back to signin</Text>
                </>
              }
             
          </Box>
};


export default SignUp;