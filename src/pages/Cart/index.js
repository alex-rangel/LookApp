import react, {useState} from "react";
import { Box, Text, ScrollView,Spacer,Title,Cover,Button } from "../../componentes"

import Header from "../../componentes/Header";
import Tabs from "../../componentes/Tabs";
import Item from "../../componentes/Product/item";
import Payment from "../../componentes/Forms/payment";

import { colors } from "../../styles/tema.json"
import util from "../../util"

const Cart = () => {

    const[tab, setTab ] = useState('cart')

    return(
        <>
            <Header Title="Cart" goBack/>
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
                        {Array.from(Array(10)).map(items => <Item 
                            cover="https://cursinhoparamedicina.com.br/wp-content/uploads/2022/10/Paisagem-1.jpg"
                            brand="Raf Simons"
                            title="Large striped cardigan"
                            price="$1080"
                            selected
                        />)}
                        <Spacer size='30px'/>

                        <Box row width="100%" justify='space-between'>
                            <Text color='dark'>Order:</Text>
                            <Text color='dark'>$445.00</Text>
                        </Box>
                        <Spacer size='20px'/>
                        <Box row width="100%" justify='space-between'>
                            <Text color='dark'>Discount:</Text>
                            <Text color='dark'>$-44.50</Text>
                        </Box>
                        <Spacer size='20px'/>
                        <Box row width="100%" justify='space-between'>
                            <Text color='dark'>Delivery:</Text>
                            <Text color='dark'>$10.00</Text>
                        </Box>
                        <Spacer size='20px'/>
                        <Box row width="100%" justify='space-between'>
                            <Text color='dark' bold>Total order:</Text>
                            <Text color='dark' bold>$410.50</Text>
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
                    <Button  block onPress={() => {}}>
                        <Text color="light">
                            Confirmation
                        </Text>
                    </Button>
                    <Spacer size='50px'/>
                    </>
                )}
            </ScrollView>
            
        </>
    )
}

export default Cart