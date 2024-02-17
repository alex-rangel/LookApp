import react from "react";
import { Box,Text } from "../../componentes"

import Header from "../../componentes/Header";
import OrderList from "../../componentes/Order/OrderList";

const Orders = () => {
    return(
        <Box>
            <Header drawer={true} Title="Orders"/>
            <OrderList/>
        </Box>
    )
}

export default Orders