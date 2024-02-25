import react, { useState, useContext } from "react";
import { ActivityIndicator } from 'react-native'
import { Box, Text, ScrollView, Spacer, Title, Cover, Button } from "../../componentes"
import moment from "moment";

import Header from "../../componentes/Header";
import Tabs from "../../componentes/Tabs";
import Item from "../../componentes/Product/item";
import Payment from "../../componentes/Forms/payment";
import CongratsModal from "../../componentes/Modals/congrats";
import Carregamento from "../../componentes/carregamento"

import { AppContext } from "../../Contexts/app"

import { colors } from "../../styles/tema.json"
import util from "../../util"
import api from "../../services/api"

const Cart = () => {

    const [tab, setTab] = useState('cart')
    const [showCongrats, setShowCongrats] = useState(false)
    const [loading, setLoading] = useState(false)
    const [creditCard, setCreditCard] = useState({})


    const { cart, discount_percentage, delivery_tax, usuario,  order_number } = useContext(AppContext)

    const cartCarregamento = cart?.length === 0
    const orderPrice = cart?.reduce((acc, product) => {
        return (acc += product.price)
    }, 0)
    const totalDiscount = (orderPrice * discount_percentage).toFixed(2)
    const totalOrderPrice = orderPrice + delivery_tax - totalDiscount

    const buyCart = async () => {
        console.log(creditCard)
        try {
           setLoading(true) 
           //validar os dados do cartao de credito
            const creditCardValidation = util.isvalidCreditCard(creditCard)
            if(creditCardValidation.error){
                alert(creditCardValidation.message)
                return false
            }

        //    criar a order
        //    {
        //     "id": "1",
        //     "userId": 1,
        //     "step": "waiting",
        //     "createdAt": "2022-04-21T12:32",
        //     "orderNumber": "1947034",
        //     "trackingNumber": "IW3475453455",
        //     "totalValue": 80.58,
        //     "totalItems": 3
        //   },

        const {data: orderData} = await api.post('/orders',{
                "userId": usuario.id,
                "step": "waiting",
                "createdAt": moment().format(),
                "orderNumber":  order_number,
                "trackingNumber": new Date().getTime(),
                "totalValue": totalOrderPrice ,
                "totalItems": cart?.length
        })

        if(!orderData.id){
            alert('Order creation error ... try againd later ...' )
            setLoading(false)
            return false
        }

           //exibir a modal de sucesso
           setShowCongrats(true)
           
        } catch (error) {
            setLoading(false)
            alert(error.message)
        }
    }


    return (
        <>
            {showCongrats && <CongratsModal />}
            <Header Title="Cart" goBack />
            {/* {cartCarregamento &&
            <> 
                <carregamento messagem="O carrinho está vazio..."/>
            </>} */}
            {!cartCarregamento &&
                <>
                    <Tabs tabs={[
                        { label: 'Cart', value: 'cart' },
                        { label: 'Payment', value: 'payment' },
                    ]}
                        active={tab}
                        onChange={(value) => setTab(value)}
                    />

                    <ScrollView hasPadding background='light'>
                        <Spacer size='20px' />
                        <Title variant='small'>Order number is 458765342</Title>
                        <Spacer size='20px' />
                        {tab === 'cart' && (

                            <>
                                {cart?.map(product => <Item
                                    product={product}
                                    selected
                                />)}
                                <Spacer size='30px' />

                                <Box row width="100%" justify='space-between'>
                                    <Text color='dark'>Order:</Text>
                                    <Text color='dark'>${orderPrice}</Text>
                                </Box>
                                <Spacer size='20px' />
                                <Box row width="100%" justify='space-between'>
                                    <Text color='dark'>Discount:</Text>
                                    <Text color='dark'>$-{totalDiscount}</Text>
                                </Box>
                                <Spacer size='20px' />
                                <Box row width="100%" justify='space-between'>
                                    <Text color='dark'>Delivery:</Text>
                                    <Text color='dark'>${delivery_tax?.toFixed(2)}</Text>
                                </Box>
                                <Spacer size='20px' />
                                <Box row width="100%" justify='space-between'>
                                    <Text color='dark' bold>Total order:</Text>
                                    <Text color='dark' bold>${totalOrderPrice?.toFixed(2)}</Text>
                                </Box>
                                <Spacer size='30px' />
                                <Button block onPress={() => setTab('payment')}>
                                    <Text color="light">
                                        Place order
                                    </Text>
                                </Button>
                                <Spacer size='50px' />
                            </>

                        )}
                        {tab === 'payment' && (

                            <>
                                <Spacer size='30px' />
                                <Box>
                                    <Box row
                                        fluid
                                        justify='space-between'
                                        style={{
                                            borderBottomWidth: 0.5,
                                            borderBottomColor: util.toAlpha(colors.muted, 50),
                                            paddingBottom: 10,
                                        }}
                                    >
                                        <Text bold color='dark'>Shipping address</Text>
                                        <Text color='danger'>Change</Text>
                                    </Box>
                                    <Spacer size='20px' />
                                    <Text color='dark'>
                                        Tiana Rosser, 4517 Washington Ave Manchester, Kentucky 39495 United States
                                    </Text>
                                </Box>
                                <Spacer size='30px' />
                                <Box>
                                    <Box row
                                        fluid
                                        justify='space-between'
                                        style={{
                                            borderBottomWidth: 0.5,
                                            borderBottomColor: util.toAlpha(colors.muted, 50),
                                            paddingBottom: 10,
                                        }}
                                    >
                                        <Text bold color='dark'>Delivery details</Text>
                                        <Text color='danger'>Change</Text>
                                    </Box>
                                    <Spacer size='20px' />
                                    <Text color='dark'>
                                        Standard Delivery
                                    </Text>
                                    <Text color='dark'>
                                        Saturday 27 - Tuesday 30
                                    </Text>
                                    <Text color='dark'>
                                        Cost: $10
                                    </Text>
                                </Box>
                                <Spacer size='30px' />
                                <Payment onChange={(creditCardData) => setCreditCard(creditCardData)} />
                                <Spacer size='30px' />
                                <Button block onPress={() => { buyCart()}}>
                                    {!loading && <Text color="light">
                                        Confirmation
                                    </Text>}
                                    {loading && <ActivityIndicator/>}

                                </Button>
                                <Spacer size='50px' />
                            </>

                        )}
                    </ScrollView>
                </>}
        </>
    )
}

export default Cart