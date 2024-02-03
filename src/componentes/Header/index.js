import React from "react";
import { SafeAreaView } from "react-native";
import { Box, Text, Touchable } from "../../componentes"
import { colors} from "../../styles/tema.json"
import Icon from "react-native-vector-icons/MaterialCommunityIcons"

const Header = ()=> {
    return(
        <Box fluid 
        background="litht"
        height="70px"
        border= {`1px solid ${colors.muted} `}>
            <SafeAreaView style={{flexDirection:"row"}}>
                <Touchable justify="center"
                 align="center" 
                 width="80px">
                    <Icon name="menu" size={20} color="black"/>
                </Touchable>
                <Box justify="center" 
                align="center" 
                background="light">
                    <Text color="black" bold>Explore</Text>
                </Box>
                <Touchable width="80px">

                </Touchable>
            </SafeAreaView>
        </Box>
    )
}

export default Header