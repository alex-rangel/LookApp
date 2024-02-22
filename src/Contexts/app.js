import React, { createContext, useState } from "react";

export const AppContext = createContext({})

 const ContextProvider = ({ children }) => {

    const [usuario, setUsuario] = useState({})
    const [cart, setCart] = useState([])

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

     const removeFromCart = () =>{}

    return(
        <AppContext.Provider value={{usuario, setUsuario, addTocart}}>
            {children}
        </AppContext.Provider>
    )}
    

export default ContextProvider