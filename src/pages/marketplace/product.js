import React from "react"
import { useNavigation } from "@react-navigation/native";
import { Box, Touchable, ScrollView, Cover, Text, Title, Spacer, Button} from "../../componentes"
import { colors } from "../../styles/tema.json"
import util from "../../util"

import Header from "../../componentes/Header"
import Picker from "../../componentes/Picker"
import Icon from "react-native-vector-icons/SimpleLineIcons"

const Product = () => {

    const { navigate }= useNavigation()

  return ( 
        
        <Box fluid>
            <Header Title="Striped Cardigan" goBack right={()=>(
                <Touchable onPress={ () => alert('teste')} width="70px">
                    <Icon name="bag" size={20}/>
                </Touchable>
            )}/>
            <ScrollView fluid>
                <Cover
                    image="https://cursinhoparamedicina.com.br/wp-content/uploads/2022/10/Paisagem-1.jpg"
                    width="100%"
                    height="400px"
                >
                    <Box 
                    fluid height="100%" 
                    background={util.toAlpha(colors.black, 50)}
                    hasPadding
                    justify="flex-end"
                    >
                        <Title bold color="light" variant="big">
                            $1080
                        </Title>
                    </Box>
                </Cover>
                <Box hasPadding background="light" height="100%">
                    <Text color="black">TSHIRT</Text>
                    <Spacer size="20px"/>
                    <Title color="black">A.P.C. Collection Spring 2015</Title>
                    <Spacer size="30px"/>
                    <Text color="dark">
                        Enjoy the beauty of italian cotton all over your body. This item will fit your body and warm you up all over and during spring. This item will fit your body and warm you up all over and during spring.    
                    </Text>
                    <Spacer size="30px"/>
                    <Picker
                        title="Size"
                        options={[
                            {label: 'P', value: 'P'},
                            {label: 'M', value: 'M'},
                            {label: 'G', value: 'G'},
                            {label: 'XG', value: 'XG'}
                        ]}
                        initialValue="M"
                        onChange={value => alert(value)}
                    />
                    <Spacer size="30px"/>
                    <Button block onPress={()=> navigate('Cart')}>
                        <Text color="light">Add to Card</Text>
                    </Button>
                </Box>
            </ScrollView>
        </Box>
  )
};


export default Product;