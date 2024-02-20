import React, {useState, useEffect} from "react"
import { ActivityIndicator } from "react-native"
import { Box, Touchable, Text } from "../../componentes"
import Header from "../../componentes/Header"
import Icon from "react-native-vector-icons/SimpleLineIcons"

import api from "../../services/api";

import CategoryList from "../../componentes/Category/categotyList"

const Marketplace = ({ navigation }) => {

    const [loading, setLoading]= useState(false)
    const [category, setCategory] = useState({})

    const getCategory = async() =>{
        try {
            setLoading(true)
            setTimeout(async () =>{
                const { data:categoryData } = await api.get('/categories')
                setCategory(categoryData)
                setLoading(false)
        }, 1000 * 2)
        } catch (error) {
            setLoading(false)
            alert(error.mensage)
        }
    }

    //FOCUS
    useEffect(() =>{
        const unsubscribe = navigation.addListener('focus', () =>{
            getCategory()
        })

        return unsubscribe
    }, [navigation])

  return ( 
        
        <Box background="light">
            <Header Title="Category" right={()=>(
                <Touchable onPress={ () => alert('teste')} width="70px">
                    <Icon name="bag" size={20}/>
                </Touchable>
            )}/>
            <Text>{category}</Text> 
             <CategoryList categories={category}/>
        </Box>
  )
};


export default Marketplace;