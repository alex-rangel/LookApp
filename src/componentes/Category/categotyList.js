import React from "react"
import { Box, Title, ScrollView} from "../../componentes"

import Category from "./category"


const CategoryList = () => {

  return ( 
        
        <ScrollView 
            fluid
            style={{
                paddingTop:20,
                paddingLeft:20,
                paddingRight:20
            }}
        >
            {Array.from(Array(10)).map(items => <Category title={`Category`} description="123456 Itens"/>)}
            
        </ScrollView>
  )
};


export default CategoryList;