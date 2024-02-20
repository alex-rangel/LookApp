import React from "react"
import { Box, Title, ScrollView} from "../../componentes"

import Category from "./category"


const CategoryList = ({ categories }) => {

  return ( 
        
        <ScrollView 
            fluid
            style={{
                paddingTop:20,
                paddingLeft:20,
                paddingRight:20
            }}
        >
            {categories?.map(category => <Category categoria={category}/>)}
            
        </ScrollView>
  )
};


export default CategoryList;