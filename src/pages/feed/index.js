import React, { useState, useEffect } from "react";
import { Box, ScrollView} from "../../componentes"
import Header from "../../componentes/Header";
import StoryList from "../../componentes/Story/storylist";
import Post from "../../componentes/Posts";
import api from "../../services/api"
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

            setTimeout( async () => {

            const { data:feedData } = await api.get('/feed')
            setFeed(feedData)
            setLoading(false)
            }, 1)
        
        } catch (error) {
            
            setLoading(false)
            //alert(error.mensage)
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

        {loading && <Carregamento loading/>}

        {!loading && <>
        <ScrollView style={{width:'100%'}}>
            <StoryList stories={feed?.stories}/>
            <Post posts={feed?.posts}/>
        </ScrollView>
        </>}
    </Box>
    )
}

export default Feed