import React from "react";
import{ Box, Text, Title, Cover, Touchable, Spacer } from "../../componentes"
import Icon from "react-native-vector-icons/SimpleLineIcons"
import { colors} from "../../styles/tema.json"

const Posts = ()=>{
    return(
        <Box hasPadding fluid>
            <Box align="center" row>
                <Cover image="https://cursinhoparamedicina.com.br/wp-content/uploads/2022/10/Paisagem-1.jpg" 
                spacing="0px 5px 0px 0px"
                circle>
                    
                </Cover>
                <Box>
                    <Text bold color="black">Alex Rangel</Text>
                    <Text variant="small">2 min ago</Text>
                </Box>
                <Touchable height="30px"
                width="100px" 
                align="flex-end"
                >
                    <Icon  name="options" size={20} color="black"/>
                </Touchable>
            </Box>
            <Cover image="https://cursinhoparamedicina.com.br/wp-content/uploads/2022/10/Paisagem-1.jpg"
                    width="100%"
                    height="190px"
                    spacing="10px 0px"
                    radius="10px"
            >
            </Cover>
            <Box fluid
                 row
            >
            {
                Array.from(Array(3)).map(item =>(
                    <Cover
                    circle
                    width="30px"
                    height="30px"
                    border={`1px solid ${colors.muted}`}
                    spacing="0px -15px 0px 0px"
                    image="https://cursinhoparamedicina.com.br/wp-content/uploads/2022/10/Paisagem-1.jpg"
                    >
                    </Cover>
                ))
            }
            <Text variant="small" 
                spacing="0px 20px"
            >
                Liked by 10,098
            </Text>
            <Box row justify="flex-end">
                <Touchable width="24px" spacing="0px 15px 0px 0px">
                    <Icon name="heart" size={24} color={colors.danger}/>
                </Touchable>
                <Touchable width="24px" spacing="0px 15px 0px 0px">
                    <Icon name="bubble" size={24} color={colors.muted}/>
                </Touchable>
                <Touchable width="24px">
                    <Icon name="share" size={24} color={colors.muted}/>
                </Touchable>
            </Box>
            </Box>
            <Spacer/>
            <Text color="dark"
                variant="small"
            >
                Interview: shoe Designer John Fluevog On New Book, Spirytualy And 'Show Fashion'
            </Text>
        </Box>
    )
    
}

export default Posts
