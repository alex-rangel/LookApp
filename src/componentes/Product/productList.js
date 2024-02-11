import React from "react"
import { Title, ScrollView} from "../../componentes"

import Item from "../../componentes/Product/item"


const ProductList = () => {

  return ( 
        
        <ScrollView 
            fluid
        >
            {Array.from(Array(20)).map(items => <Item/>)}
            
        </ScrollView>
  )
};


export default ProductList;