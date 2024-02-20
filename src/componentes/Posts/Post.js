import React from "react";
import{ Box, Text, Title, Cover, Touchable, Spacer } from "../../componentes"
import Icon from "react-native-vector-icons/SimpleLineIcons"
import { colors} from "../../styles/tema.json"
import moment from "moment";

const Posts = ({ post })=>{
    return(
        <Box hasPadding fluid>
            <Box align="center" row>
                <Cover image={post?.owner?.photo}
                spacing="0px 5px 0px 0px"
                circle>
                    
                </Cover>
                <Box>
                    <Text bold color="black">{post?.owner?.username}</Text>
                    <Text variant="small">{moment(post.createdAt).fromNow()}</Text>
                </Box>
                <Touchable height="30px"
                width="100px" 
                align="flex-end"
                >
                    <Icon  name="options" size={20} color="black"/>
                </Touchable>
            </Box>
            <Cover image={post?.cover}
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
                post?.likeInfos?.photos?.map(photo =>(
                    <Cover
                    circle
                    width="30px"
                    height="30px"
                    border={`1px solid ${colors.muted}`}
                    spacing="0px -15px 0px 0px"
                    image={photo}
                    >
                    </Cover>
                ))
            }
            <Text variant="small" 
                spacing="0px 20px"
            >
                {post?.likeInfos?.description}
            </Text>
            <Box row justify="flex-end">
                <Touchable width="24px" spacing="0px 15px 0px 0px">
                    <Icon name="heart" size={24} color={colors[post?.isLiked ? 'danger' : 'muted']}/>
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
                {post?.description}
            </Text>
        </Box>
    )
    
}

export default Posts
