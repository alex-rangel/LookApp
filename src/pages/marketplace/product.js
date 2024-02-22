import React, { useState,useEffect } from "react"
import { Box, Touchable, ScrollView, Cover, Text, Title, Spacer, Button} from "../../componentes"
import { colors } from "../../styles/tema.json"
import util from "../../util"

import Header from "../../componentes/Header"
import Picker from "../../componentes/Picker"
import Icon from "react-native-vector-icons/SimpleLineIcons"

const Product = ({navigation, route }) => {

    const { product } = route?.params
    const [size, setSize] = useState(null)

    useEffect(() =>{
        setSize(product.sizes?.[0]?.value)
    },[product])

  return ( 
        
        <Box fluid>
            <Header Title={product?.title} goBack right={()=>(
                <Touchable onPress={ () => navigation.navigate('Cart')} width="70px">
                    <Icon name="bag" size={20}/>
                </Touchable>
            )}/>
            <ScrollView fluid>
                <Cover
                    image={product?.cover}
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
                            ${product?.price}
                        </Title>
                    </Box>
                </Cover>
                <Box hasPadding background="light" height="100%">
                    <Text color="black">{product?.brand}</Text>
                    <Spacer size="20px"/>
                    <Title color="black">{product?.type}</Title>
                    <Spacer size="30px"/>
                    <Text color="dark">
                        {product.description}    
                    </Text>
                    <Spacer size="30px"/>
                    <Picker
                        title="Size"
                        options={product.sizes}
                        initialValue={product?.sizes?.[0]?.value}
                        onChange={value => setSize(value)}
                    />
                    <Spacer size="30px"/>
                    <Button block onPress={()=> navigation.navigate('Cart')}>
                        <Text color="light">Add to Card</Text>
                    </Button>
                </Box>
            </ScrollView>
        </Box>
  )
};


export default Product;