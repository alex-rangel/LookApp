import React from "react";
import { ActivityIndicator } from "react-native"

import Icon from "react-native-vector-icons/SimpleLineIcons"

import { colors } from "../../styles/tema.json"
import { Box, Title,Spacer } from "../index"

const Carregamento = ({ loading = false, menssagen = 'loading...'}) =>{
    return(
        <Box justify='center' align='center' fluid>
            <Spacer size='50px'/>
            
            {!loading && (
            <>
                <Icon name='exclamation' color={colors.primary} size={100}/>
                <Spacer size='30px'/>
            </>
            )}

            {loading && (
            <>
                <ActivityIndicator size="large"/>
                <Spacer size='20px'/>
            </>
            )}

            <Title>{loading ? "carregando..." : menssagen}</Title>
        </Box>
    )
}

export default Carregamento




