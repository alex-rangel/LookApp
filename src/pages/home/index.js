import React, { useContext } from "react"
import { Box, Title, Button, Spacer, Text} from "../../componentes"
import { useNavigation } from "@react-navigation/native";
import { AppContext } from '../../Contexts/app'

const Home = () => {

  const { navigate }= useNavigation()

  const { name } = useContext(AppContext)

  return <Box justify="center" hasPadding align="center" background="dark">
            <Box justify="center" align="center">
              <Text>{name}</Text>
              <Title color="light" bold>LOOKAPP</Title>
              <Spacer/>
              <Text align="center" spacing="0px 40px" color="light">Stay on top of the fashion world and buy your favorite looks.</Text>
            </Box>
            <Box fluid justify="center" align="center">
              <Button onPress={()=> navigate('Signin')} block><Text color="light">Signin my account</Text></Button>  
              <Spacer/>
              <Text underline color="light" onPress={()=> navigate('Signup')}>Create new account</Text>
            </Box>
          </Box>
};


export default Home;