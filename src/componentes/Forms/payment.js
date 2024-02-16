import react, { useState, useEffect } from "react";

import { Box, Text, Title, Spacer,Input } from "../"

const paymentForm = ({ onChange = (creditCardData) => {} }) => {

    const [data, setData] = useState({
        holder_name: '',
        number: '',
        valid_data: '',
        cvv: ''
    })

    useEffect(() => {
        onChange(data)
    },[data])
   
   return(
   <Box>
        <Title variant='small'>
        Select and enter your payment details
        </Title>
        <Spacer/>
        <Text>
            By continuing you agree to our <Text color='danger'>Terms</Text>
        </Text>
        <Spacer size='20px'/>
        <Input 
            placeholder="Holder Name"
            value={data.holder_name}
            onChangeText={(holder_name) => {
                setData({
                    ...data,
                    holder_name,
                })
            }}
        />
        <Spacer/>
        <Input 
            placeholder="Credit card number"
            value={data.number}
            onChangeText={(number) => {
                setData({
                    ...data,
                    number,
                })
            }}
        />
            
        <Spacer/>
        <Input 
            placeholder=" Valid Date"
            value={data.valid_data}
            onChangeText={(valid_data) => {
                setData({
                    ...data,
                    valid_data,
                })
            }}    
        />
        <Spacer/>
        <Box row align='center'>
            <Box spacing='0px 10px 0px 0px'>
                <Input 
                    placeholder="CVV"
                    value={data.cvv}
                    onChangeText={(cvv) => {
                    setData({
                        ...data,
                        cvv,
                    })
            }}
                />
            </Box>
            <Box>
                <Text variant='small'>
                    3 or 4 digits usually found on the signature strip
                </Text>
            </Box>
        </Box>

    </Box>
   )
}

export default paymentForm