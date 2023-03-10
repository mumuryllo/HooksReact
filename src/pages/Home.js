import React from "react";
import HookUseEffect from "../components/HookUseEffect";
import HookUseState from "../components/HookUseState";

// useContext
import { useContext } from "react";
import { SomeContext } from "../components/HookUseContext";

const Home =()=>{

    const {contextValue} = useContext(SomeContext)

    return(
     <div>
      <HookUseState/>
      <HookUseEffect/>
      <h2>useContext</h2>
      <p>Valor do Contexto: {contextValue}</p>
      <hr/>
     </div>
    )
}

export default Home