import React from "react"
import { ScrollView,Spacer} from "../../componentes"

import OrderItem from "../Order/OrderItem"


const OrderList = ({ orders }) => {

  return ( 
        <ScrollView 
            fluid
            background='light'
            hasPadding
        > 
            {orders?.map(order => (
                <OrderItem order={order}/>
            ))}
            <Spacer size='20px'/>
        </ScrollView>
  )
};


export default OrderList;