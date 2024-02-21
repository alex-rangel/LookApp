import React from "react";
import { ScrollView } from "../../componentes"
import Posts from "../../componentes/Posts/Post"

const Post = ({ posts }) =>{
    return(
        <ScrollView>
            {posts?.map(post => <Posts post={post}/>)}
        </ScrollView>
    )
}

export default Post