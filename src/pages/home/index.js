import React, { useContext, useEffect, useState } from "react"
import { Box, Title, Button, Spacer, Text} from "../../componentes"
import { useNavigation } from "@react-navigation/native";
import { AppContext } from '../../Contexts/app'
import { ActivityIndicator } from 'react-native'
import AsyncStorage from "@react-native-async-storage/async-storage";

const Home = () => {

  const { navigate }= useNavigation()

  const [loading, setLoading] = useState(true)
  const { setUsuario } = useContext(AppContext)

  const checkLogged = async() => {
     
    setLoading(true)
    AsyncStorage.clear()
      const loggedUser = await AsyncStorage.getItem('@user')
      if(loggedUser){
        setUsuario(JSON.parse(loggedUser))
        navigate('Feed')
      }else{
        setLoading(false)
      }
  }

  useEffect(() => {
    checkLogged()
  }, [])

  return <Box justify="center" hasPadding align="center" background="dark">
            <Box justify="center" align="center">
              <Title color="light" bold>LOOKAPP</Title>
              <Spacer/>
              <Text align="center" spacing="0px 40px" color="light">Stay on top of the fashion world and buy your favorite looks.</Text>
              {loading && <>
                            <Spacer size='50px'/>
                            <ActivityIndicator size='large' color='#fff'/>
                          </>}
            </Box>

            

            {!loading && <Box fluid justify="center" align="center">
              <Button onPress={()=> navigate('Signin')} block><Text color="light">Signin my account</Text></Button>  
              <Spacer/>
              <Text underline color="light" onPress={()=> navigate('Signup')}>Create new account</Text>
            </Box>}
          </Box>
};


export default Home;