import React from "react"
import { Text, Box, Touchable, Cover, Spacer} from "../../componentes"
import { useNavigation } from "@react-navigation/native";


const Item = ({ cover, brand, title, price, selected = false }) => {

    const { navigate }= useNavigation()

  return ( 
        
        <Box fluid >
            <Touchable
                hasPadding={!selected}
                onPress={()=> navigate('Product')}
                row
                background="light"
                spacing={selected ? '5px 0px' : '0px 0px 3px 0px'}
            >
                <Cover
                    width="80px"
                    height="80px"
                    image={cover}
                >
                </Cover>
                <Box hasPadding style={{paddingBottom:0, paddingTop:0}}>
                        { !selected && <Text color="dark" >{brand}</Text>}
                        <Text color="dark" bold >{title}</Text>
                        <Spacer/>
                        {selected && (
                            <Box>
                                <Text color='dark'>Size: XG</Text>
                            </Box>
                        )}
                        <Box row width="100%" justify="space-between">
                            <Text color="dark">{price}</Text>
                            <Text color="danger">{selected ? 'Remove' : 'Add to cart'}</Text>
                        </Box>
                </Box>
            </Touchable>
            
        </Box>
  )
};


export default Item;