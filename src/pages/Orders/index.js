import react, { useState, useEffect, useContext } from "react";
import { Box,Text } from "../../componentes"

import Header from "../../componentes/Header";
import OrderList from "../../componentes/Order/OrderList";
import Carregamento from "../../componentes/carregamento";
import api from "../../services/api"

import { AppContext } from "../../Contexts/app";

const Orders = ({navigation}) => {

    const [loading, setLoading] = useState(false)
    const [orders, setOrders] = useState([])
    const {user} = useContext(AppContext)

    const getOrders = async() =>{
        try {
            setLoading(true)

            setTimeout( async () => {
                const { data:ordersData } = await api.get('/orders',{
                    params:{
                        userId: user?.id
                    }
                })
                setOrders(ordersData)
                setLoading(false)
            }, 1000 *2)
        }catch (error) {
            setLoading(false)
            alert(error.mensage)
        }
    }

    //FOCUS
    useEffect(() =>{
        const unsubscribe = navigation.addListener('focus', () =>{
            getOrders()
        })

        return unsubscribe
    }, [navigation])

    return(
        <Box>
            <Header drawer={true} Title="Orders"/>
            {loading && <Carregamento loading/>}
            {!loading && <OrderList orders={orders}/>}
        </Box>
    )
}

export default Orders