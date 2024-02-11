import React from "react"
import { Text, Box, Touchable, Cover, Spacer} from "../../componentes"


const Item = ({ cover, brand, title, price }) => {

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
                    image={cover}
                >
                </Cover>
                <Box hasPadding style={{paddingBottom:0, paddingTop:0}}>
                        <Text color="dark" >{brand}</Text>
                        <Text color="dark" bold >{title}</Text>
                        <Spacer/>
                        <Box row width="100%" justify="space-between">
                            <Text color="dark">{price}</Text>
                            <Text color="danger">Add to cart</Text>
                        </Box>
                </Box>
            </Touchable>
            
        </Box>
  )
};


export default Item;