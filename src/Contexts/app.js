import React, { createContext, useState } from "react";

export const AppContext = createContext({})

const ContextProvider = ({ children }) => {

    const [usuario, setUsuario] = useState({})

    return(
        <AppContext.Provider value={{usuario, setUsuario}}>
            {children}
        </AppContext.Provider>
    )
}

export default ContextProvider