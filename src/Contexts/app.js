import React, { createContext, useState } from "react";

export const AppContext = createContext({})

 const ContextProvider = ({ children }) => {

    const [usuario, setUsuario] = useState({})
    const [cart, setCart] = useState([])
    const discount_percentage = 0.10
    const delivery_tax = 10
    const order_number = new Date().getTime()

    const addTocart = (product) =>{
        const existentIndex = cart?.findIndex(p => p.id === product.id)
        let oldCart = cart

        //SE EXISTIR NO CARRINHO DE COMPRA
        if(existentIndex !== -1){
            oldCart[existentIndex] = product
        }else{
        oldCart.push(product)
    }

        setCart(oldCart)}

     const removeFromCart = (productId) =>{
        const filteredProducts = cart?.filter(p => p.id !== productId)
        setCart(filteredProducts)
     }

    return(
        <AppContext.Provider value={{
            usuario, 
            setUsuario, 
            addTocart, 
            cart, 
            removeFromCart, 
            discount_percentage, 
            delivery_tax,
            usuario,
            order_number
            }}>
            {children}
        </AppContext.Provider>
    )}
    

export default ContextProvider