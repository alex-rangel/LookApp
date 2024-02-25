import React, {useContext} from "react"
import { Alert } from "react-native"
import { Text, Box, Touchable, Cover, Spacer} from "../../componentes"
import { useNavigation } from "@react-navigation/native";

import { AppContext } from "../../Contexts/app"


const Item = ({ product, selected = false}) => {

    const { navigate }= useNavigation()
    const { removeFromCart } = useContext(AppContext)

  return ( 
        
        <Box fluid >
            <Touchable
                hasPadding={!selected}
                onPress={()=> { if(!selected){
                    navigate('Product',{ product })
                }else{

                    Alert.alert('você tem certeza?',
                    'você ira remover o produto do carrinho',
                    [ 
                        {text: 'cancelar', style: 'cancel' },
                        {text: 'Remover', style: 'destructive', onPress:() => removeFromCart(product?.id) }
                    ]
                    )
                } 
            }}
                row
                background="light"
                spacing={selected ? '5px 0px' : '0px 0px 3px 0px'}
            >
                <Cover
                    width="80px"
                    height="80px"
                    image={product?.cover}
                >
                </Cover>
                <Box hasPadding style={{paddingBottom:0, paddingTop:0}}>
                        { !selected && <Text color="dark" >{product?.brand}</Text>}
                        <Text color="dark" bold >{product?.title}</Text>
                        <Spacer/>
                        {selected && (
                            <Box>
                                <Text color='dark'>Size: {product?.size}</Text>
                            </Box>
                        )}
                        <Box row width="100%" justify="space-between">
                            <Text color="dark">{product?.price}</Text>
                            <Text color="danger">{selected ? 'Remove' : 'Add to cart'}</Text>
                        </Box>
                </Box>
            </Touchable>
            
        </Box>
  )
};


export default Item;