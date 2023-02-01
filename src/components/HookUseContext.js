import { createContext } from "react";

export const SomeContext = createContext();

export const HookUseContext = ({children}) =>{

     const contextValue = "teestando contexto"

     return(
        <SomeContext.Provider value={{contextValue}}>
            {children}
        </SomeContext.Provider>
     )

}
// usado qdo as paginas por exemplo tem valores compartilhados como um carrinho de compras por exemplo
