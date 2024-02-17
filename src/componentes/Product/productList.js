import React from "react"
import { Title, ScrollView} from "../../componentes"

import Item from "../../componentes/Product/item"


const ProductList = () => {

  return ( 
        
        <ScrollView 
            fluid
        > 
            {Array.from(Array(20)).map(items => <Item 
              cover="https://cursinhoparamedicina.com.br/wp-content/uploads/2022/10/Paisagem-1.jpg"
              brand="Raf Simons"
              title="Large striped cardigan"
              price="1080"
            />)}
            
        </ScrollView>
  )
};


export default ProductList;