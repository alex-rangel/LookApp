import React from "react"
import { Text, Box, Touchable, Cover, Spacer} from "../../componentes"


const Item = () => {

  return ( 
        
        <Box fluid >
            <Touchable
                hasPadding
                row
                background="light"
                spacing="0px 0px 3px 0px"
            >
                <Cover
                    width="80px"
                    height="80px"
                    image="https://cursinhoparamedicina.com.br/wp-content/uploads/2022/10/Paisagem-1.jpg"
                >
                </Cover>
                <Box hasPadding style={{paddingBottom:0, paddingTop:0}}>
                        <Text color="dark" >Raf Simons</Text>
                        <Text color="dark" bold >Large striped cardigan</Text>
                        <Spacer/>
                        <Box row width="100%" justify="space-between">
                            <Text color="dark">1080</Text>
                            <Text color="danger">Add to cart</Text>
                        </Box>
                </Box>
            </Touchable>
            
        </Box>
  )
};


export default Item;