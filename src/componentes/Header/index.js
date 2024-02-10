import React from "react";
import { SafeAreaView } from "react-native";
import { Box, Text, Touchable,Spacer } from "../../componentes"
import { colors} from "../../styles/tema.json"
import Icon from "react-native-vector-icons/MaterialCommunityIcons"
import { useNavigation } from "@react-navigation/native"

const Header = ({ Title = 'Explore', right=null })=> {

    const navigation = useNavigation()

    return(
        <>
            <Spacer size="50px"/>
            <SafeAreaView style={{
                flexDirection:"row",
                borderBottomWidth:1,
                borderBottomStyle: 'solid',
                borderBottomColor: `${colors.muted}`
                }}>
                <Touchable justify="center"
                 align="center" 
                 width="80px"
                 onPress={()=>navigation.openDrawer()}>
                    <Icon name="menu" size={20} color="black"/>
                </Touchable>
                <Box justify="center" 
                align="center" 
                background="light">
                    <Text color="black" bold>{Title}</Text>
                </Box>
                {right ? right() : <Touchable width="80px"></Touchable>}
            </SafeAreaView>
        </>
        )
}

export default Header