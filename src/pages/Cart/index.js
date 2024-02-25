import react, {useState, useContext} from "react";
import { Box, Text, ScrollView,Spacer,Title,Cover,Button } from "../../componentes"

import Header from "../../componentes/Header";
import Tabs from "../../componentes/Tabs";
import Item from "../../componentes/Product/item";
import Payment from "../../componentes/Forms/payment";
import CongratsModal from "../../componentes/Modals/congrats";
import Carregamento from "../../componentes/carregamento"

import { AppContext } from "../../Contexts/app"

import { colors } from "../../styles/tema.json"
import util from "../../util"

const Cart = () => {

    const[tab, setTab ] = useState('cart')
    const [showCongrats, setShowCongrats ] = useState(false)
    const { cart, discount_percentage, delivery_tax } = useContext(AppContext)

    const cartCarregamento = cart?. length === 0
    const orderPrice = cart?.reduce((acc, product) => {
        return(acc += product.price)
    }, 0)
    const totalDiscount = ( orderPrice * discount_percentage).toFixed(2)
    const totalOrderPrice = orderPrice + delivery_tax - totalDiscount

    return(
        <>
            {showCongrats && <CongratsModal/>}
            <Header Title="Cart" goBack/>
            {/* {cartCarregamento &&
            <> 
                <carregamento messagem="O carrinho está vazio..."/>
            </>} */}
            { !cartCarregamento &&
            <>
                <Tabs tabs={[
                        {label: 'Cart', value: 'cart'},
                        {label: 'Payment', value: 'payment'},
                    ]}
                    active={tab}
                    onChange={(value) => setTab(value) }
                />
                
                <ScrollView hasPadding background='light'>
                    <Spacer size='20px'/>
                    <Title variant='small'>Order number is 458765342</Title>
                    <Spacer size='20px'/>
                    {tab === 'cart' && (
                        
                            <> 
                            {cart?.map(product => <Item 
                                product={product}
                                selected
                            />)}
                            <Spacer size='30px'/>

                            <Box row width="100%" justify='space-between'>
                                <Text color='dark'>Order:</Text>
                                <Text color='dark'>${orderPrice}</Text>
                            </Box>
                            <Spacer size='20px'/>
                            <Box row width="100%" justify='space-between'>
                                <Text color='dark'>Discount:</Text>
                                <Text color='dark'>$-{totalDiscount}</Text>
                            </Box>
                            <Spacer size='20px'/>
                            <Box row width="100%" justify='space-between'>
                                <Text color='dark'>Delivery:</Text>
                                <Text color='dark'>${delivery_tax?.toFixed(2)}</Text>
                            </Box>
                            <Spacer size='20px'/>
                            <Box row width="100%" justify='space-between'>
                                <Text color='dark' bold>Total order:</Text>
                                <Text color='dark' bold>${totalOrderPrice?.toFixed(2)}</Text>
                            </Box>
                            <Spacer size='30px'/>
                            <Button  block onPress={() => setTab('payment')}>
                                <Text color="light">
                                Place order
                                </Text>
                            </Button>
                            <Spacer size='50px'/>
                            </>
        
                    )}
                    {tab === 'payment' && (
                        
                            <> 
                        <Spacer size='30px'/>
                        <Box>
                            <Box row 
                                fluid
                                justify='space-between'
                                style={{
                                    borderBottomWidth:0.5,
                                    borderBottomColor: util.toAlpha(colors.muted, 50),
                                    paddingBottom: 10,
                                }}
                            > 
                                <Text bold color='dark'>Shipping address</Text>
                                <Text color='danger'>Change</Text>
                            </Box>
                            <Spacer size='20px'/>
                            <Text color='dark'>
                            Tiana Rosser, 4517 Washington Ave Manchester, Kentucky 39495 United States
                            </Text>
                        </Box>
                        <Spacer size='30px'/>
                        <Box>
                            <Box row 
                                fluid
                                justify='space-between'
                                style={{
                                    borderBottomWidth:0.5,
                                    borderBottomColor: util.toAlpha(colors.muted, 50),
                                    paddingBottom: 10,
                                }}
                            > 
                                <Text bold color='dark'>Delivery details</Text>
                                <Text color='danger'>Change</Text>
                            </Box>
                            <Spacer size='20px'/>
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
                        <Spacer size='30px'/>
                        <Payment onChange={(creditCardData)=> console.log(creditCardData)}/>
                        <Spacer size='30px'/>    
                        <Button  block onPress={() => {setShowCongrats(true)}}>
                            <Text color="light">
                                Confirmation
                            </Text>
                        </Button>
                        <Spacer size='50px'/>
                            </>
                        
                    )}
                </ScrollView>
            </>}
        </>
    )
}

export default Cart