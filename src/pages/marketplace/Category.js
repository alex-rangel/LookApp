import React from "react"
import { Box, Touchable } from "../../componentes"
import Header from "../../componentes/Header"
import Icon from "react-native-vector-icons/SimpleLineIcons"

import ProductList from "../../componentes/Product/productList"

const Category = () => {

  return ( 
        
        <Box color="muted">
            <Header Title="Category X" goBack right={()=>(
                <Touchable onPress={ () => alert('teste')} width="70px">
                    <Icon name="bag" size={20}/>
                </Touchable>
            )}/>
            <ProductList/> 
        </Box>
  )
};


export default Category;