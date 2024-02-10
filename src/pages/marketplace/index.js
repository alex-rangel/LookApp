import React from "react"
import { Box, Title, Touchable } from "../../componentes"
import Header from "../../componentes/Header"
import Icon from "react-native-vector-icons/SimpleLineIcons"

const Marketplace = () => {

  return ( 
        
        <Box background="light">
            <Header Title="Category" right={()=>(
                <Touchable width="70px">
                    <Icon name="bag" size={20}/>
                </Touchable>
            )}/>  
        </Box>
  )
};


export default Marketplace;