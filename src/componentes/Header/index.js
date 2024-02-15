import React from "react";
import { SafeAreaView } from "react-native";
import { Box, Text, Touchable,Spacer } from "../../componentes"
import { colors} from "../../styles/tema.json"
import Icon from "react-native-vector-icons/MaterialCommunityIcons"
import { useNavigation } from "@react-navigation/native"

const Header = ({ Title = 'Explore', right=null, goBack = false})=> {

    const navigation = useNavigation()

    return(
        <>
            <Spacer size="50px" style={{backgroundColor:`${colors.light}`}}/>
            <SafeAreaView style={{
                backgroundColor:colors.light,
                flexDirection:"row",
                borderBottomWidth:1,
                borderBottomStyle: 'solid',
                borderBottomColor: `${colors.muted}`,
                paddingBottom:10,
                }}>
                <Touchable justify="center"
                 align="center" 
                 width="80px"
                 onPress={()=>navigation[!goBack ? 'openDrawer' : 'goBack']()}>
                    <Icon name={!goBack? "menu" : "arrow-left"} size={20} color="black"/>
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