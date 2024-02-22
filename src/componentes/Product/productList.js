import React from "react"
import { Title, ScrollView} from "../../componentes"

import Item from "../../componentes/Product/item"


const ProductList = ({ products }) => {


  return ( 
        
        <ScrollView 
            fluid
        > 
            {products.map(product => <Item 
              product={product}
            />)}
            
        </ScrollView>
  )
};


export default ProductList;