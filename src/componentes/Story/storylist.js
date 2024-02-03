import React from "react";
import {Box, Title, Text, ScrollView} from "../../componentes"
import Stories from "./Stories";

const StoryList = () =>{
    return(
        <Box fluid
        background="light"
        height="260px">
            <Box 
            background="light"
            fluid
            height="40px"
            row
            justify="space-between"
            align="center"
            >
                <Text color="dark" spacing="0px 10px" bold>Story</Text>
                <Text spacing="0px 10px"
                color="danger"
                underline
                onPress={()=> alert("teste")}
                >
                    View all
                </Text>
            </Box>
            <ScrollView horizontal fluid>
                {Array.from(Array(10)).map(items => < Stories/>)}
            </ScrollView>
        </Box>
    )
}

export default StoryList