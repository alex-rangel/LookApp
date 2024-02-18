import React from "react";
import { ScrollView } from "../../componentes"
import Posts from "../../componentes/Posts/Post"

const Post = ({ posts }) =>{
    return(
        <ScrollView fluid>
            {Array.from(Array(10)).map(itens => <Posts/>)}
        </ScrollView>
    )
}

export default Post