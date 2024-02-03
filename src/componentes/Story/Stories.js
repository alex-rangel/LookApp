import React from "react";
import{ Box, Text, Touchable, Cover } from "../../componentes"

const Stories = () =>{
    return(
        <Touchable background="dark" 
            width="150px"
            height="200px"
            spacing="10px"
            radius="15px"
            >
            <Cover width="100%"
                height="100%"
                image="https://cursinhoparamedicina.com.br/wp-content/uploads/2022/10/Paisagem-1.jpg"
                >
                    <Cover circle
                        spacing="5px"
                        image="https://cursinhoparamedicina.com.br/wp-content/uploads/2022/10/Paisagem-1.jpg"
                    ></Cover>
                    <Box justify="flex-end">
                        <Text spacing="0px 5px">Alex Rangel</Text>
                        <Text variant="small" spacing="0px 7px">2 min ago</Text>
                    </Box>
                
            </Cover>
        </Touchable>
    )
}

export default Stories