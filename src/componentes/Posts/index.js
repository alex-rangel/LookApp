import React from "react";
import { ScrollView } from "../../componentes"
import Posts from "../../componentes/Posts/Post"

const Post = ({ posts }) =>{
    return(
        <ScrollView style={{width:'100%'}}>
            {posts?.map(post => <Posts post={post}/>)}
        </ScrollView>
    )
}

export default Post