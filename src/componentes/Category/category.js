import React from "react"
import { Box, Title, Touchable, Spacer, Text, Cover } from "../../componentes"

import { useNavigation } from "@react-navigation/native"

import util from "../../util"
import { colors } from "../../styles/tema.json"; 


const Category = ({title, description}) => {

    const { navigate } = useNavigation()

  return ( 
        
        <Touchable
            width="100%"
            height="180px"
            radius="10px"
            spacing="10px 0px"
            onPress={ () => navigate('Category')}
        >
            <Cover 
                width="100%"
                height="100%"
                image="https://cursinhoparamedicina.com.br/wp-content/uploads/2022/10/Paisagem-1.jpg"
            >
                <Box
                    width="100%"
                    justify="center"
                    align="center"
                    hasPadding
                    background={util.toAlpha(colors.black, 50)}
                >
                    <Title color="light" bold >{ title }</Title>
                    <Spacer/>
                    <Text color="light" >{ description }</Text>
                </Box>
            </Cover>
        </Touchable>
  )
};


export default Category;