import React, { useState,useEffect } from "react"
import { Box, Touchable, Text } from "../../componentes"
import Header from "../../componentes/Header"
import Icon from "react-native-vector-icons/SimpleLineIcons"
import Carregamento from "../../componentes/carregamento";
import api from "../../services/api";

import ProductList from "../../componentes/Product/productList"


const Category = ({ navigation, route }) => {

    const { categoria } = route.params
    const [loading, setLoading]= useState(false)
    const [products, setProducts] = useState([])

    const getProducts = async() =>{
        try {
            setLoading(true)

            setTimeout( async () => {
                const { data:productData } = await api.get('/products',{
                    params:{
                        categoryId: categoria?.id
                    }
                })
                setProducts(productData)
                setLoading(false)
            }, 1000 *2)
        }catch (error) {
            setLoading(false)
            alert(error.mensage)
        }
    }

    //FOCUS
    useEffect(() =>{
        const unsubscribe = navigation.addListener('focus', () =>{
            getProducts()
        })

        return unsubscribe
    }, [navigation])

  return ( 
        
        <Box color="muted">
            <Header Title={categoria?.title} goBack right={()=>(
                <Touchable onPress={ () => navigation.navigate('Cart')} width="70px">
                    <Icon name="bag" size={20}/>
                </Touchable>
            )}/>
            
            <ProductList products={ products }/> 
        </Box>
  )
};


export default Category;