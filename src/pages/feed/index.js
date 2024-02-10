import React from "react";
import { Box, ScrollView} from "../../componentes"
import Header from "../../componentes/Header";
import StoryList from "../../componentes/Story/storylist";
import Post from "../../componentes/Posts";

const Feed = () => {
    return(
    <Box background="light">
        <Header Title='Explore'/>
        <ScrollView>
            <StoryList/>
            <Post/>
        </ScrollView>
    </Box>
    )
}

export default Feed