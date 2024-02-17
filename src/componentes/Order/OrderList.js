import React from "react"
import { ScrollView,Spacer} from "../../componentes"

import OrderItem from "../Order/OrderItem"


const OrderList = () => {

  return ( 
        <ScrollView 
            fluid
            background='light'
            hasPadding
        > 
            {Array.from(Array(3)).map(items => (
                <OrderItem/>
            ))}
            <Spacer size='20px'/>
        </ScrollView>
  )
};


export default OrderList;