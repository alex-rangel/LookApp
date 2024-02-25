import React from "react"
import { Text, Box, Spacer, Title} from ".."
import moment from "moment"

import { colors } from "../../styles/tema.json"
import util from "../../util"

import Icon from "react-native-vector-icons/SimpleLineIcons"
 

const OrderItem = ({order} ) => {

    const stepEnum = {
        waiting:{
            icon:'clock',
            color:'warning'
        },
        delivered:{
            icon:'check',
            color:'success'
        },
        canceled:{
            icon:'close',
            color:'danger'
        }
    }

    const stepData = stepEnum[order?.step]

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
                    <Icon name='check' size={20} color={colors[stepData.color]}/>
                    <Text spacing='0px 0px 0px 5px' color={stepData.color} >{order.step?.toUpperCase()}</Text>
                </Box>
                <Box row justify='flex-end'>
                    <Text variant='small'>{moment(order?.cretedAt).format('DD/MM/YYYY HH:mm')}</Text>
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
                    Order №{order?.orderNumber}
                </Title>
                <Spacer/>
                <Text>Tracking number:<Text color='dark'>{order?.trackingNumber}</Text></Text>
            </Box>
            <Box row width='100%' hasPadding>
                <Box row>
                <Text variant='small'>VALUE OF ITEMS: <Text color='dark'>${order?.totalValue}</Text></Text>
                </Box>
                <Box row justify='flex-end'>
                <Text variant='small'>QUANTITY: <Text color='dark'>{order?.totalItems}</Text></Text>
                </Box>
            </Box>
        </Box>
        
    )
};


export default OrderItem;