import React, { useState, useEffect } from "react";
import { Box, ScrollView} from "../../componentes"
import Header from "../../componentes/Header";
import StoryList from "../../componentes/Story/storylist";
import Post from "../../componentes/Posts";
import Carregamento from "../../componentes/carregamento";

const Feed = ({ navigation }) => {

    const [loading, setLoading]= useState(false)
    const [feed, setFeed] = useState({
        stories: [],
        posts: []
    })

    const getFeed = async() =>{
        try {
            setLoading(true)
            const { data:feedData } = await api.get('/feed')
            
            setFeed(feedData)
            setLoading(false)
        
        } catch (error) {
            
            setLoading(false)
            alert(error.mensage)
        }
    }

    //FOCUS
    useEffect(() =>{
        const unsubscribe = navigation.addListener('focus', () =>{
            getFeed()
        })

        return unsubscribe
    }, [navigation])

    return(
    <Box background="light">
        <Header Title='Explore'/>
        <ScrollView>
            <StoryList stories={feed?.stories}/>
            <Post posts={feed?.posts}/>
        </ScrollView>
    </Box>
    )
}

export default Feed