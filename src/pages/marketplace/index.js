import React from "react"
import { Box, Title, Touchable } from "../../componentes"
import Header from "../../componentes/Header"
import Icon from "react-native-vector-icons/SimpleLineIcons"

import CategoryList from "../../componentes/Category/categotyList"

const Marketplace = () => {

  return ( 
        
        <Box background="light">
            <Header Title="Category" right={()=>(
                <Touchable onPress={ () => alert('teste')} width="70px">
                    <Icon name="bag" size={20}/>
                </Touchable>
            )}/> 
             <CategoryList/>
        </Box>
  )
};


export default Marketplace;