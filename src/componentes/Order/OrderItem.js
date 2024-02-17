import React from "react"
import { Text, Box, Spacer, Title} from ".."

import { colors } from "../../styles/tema.json"
import util from "../../util"

import Icon from "react-native-vector-icons/SimpleLineIcons"
 

const OrderItem = ( ) => {

  return ( 
        <Box 
            width='100%' 
            border={`1px solid ${util.toAlpha(colors.muted, 50)}`}
            radius='5px'
            spacing='0px 0px 20px 0px'
            >
            <Box row
                width='100%'  
                hasPadding
                style={{
                    borderBottomWidth:1,
                    borderBottomColor: util.toAlpha(colors.muted, 50)
                }}
                >
                <Box row align='center'>
                    <Icon name='check' size={20} color={colors.secondary}/>
                    <Text spacing='0px 0px 0px 5px' color='secondary' >delivered</Text>
                </Box>
                <Box row justify='flex-end'>
                    <Text variant='small'>May 13, 2016 5:08 PM</Text>
                </Box>
            </Box>
            <Box hasPadding 
                 width='100%' 
                 style={{
                        borderBottomWidth:1,
                        borderBottomColor: util.toAlpha(colors.muted, 50)
                    }}
                 >
                <Title>
                    Order №1947034
                </Title>
                <Spacer/>
                <Text>Tracking number:<Text color='dark'>IW3475453455</Text></Text>
            </Box>
            <Box row width='100%' hasPadding>
                <Box row>
                <Text variant='small'>VALUE OF ITEMS: <Text color='dark'>$80.58</Text></Text>
                </Box>
                <Box row justify='flex-end'>
                <Text variant='small'>QUANTITY: <Text color='dark'>20</Text></Text>
                </Box>
            </Box>
        </Box>
        
    )
};


export default OrderItem;