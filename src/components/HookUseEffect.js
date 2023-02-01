import {useEffect,useState} from "react";

const HookUseEffect =()=>{

    // useEffect sem dependencias
    useEffect(() =>{
        console.log("Executando ")
    })
    // Controlar quantas vezes algo acontece
    // Requisições Http

    // useEffect com array de depdencia vazio
    useEffect(() =>{
        console.log("Executando uma unica vez")
    },[])

    // useEffect com array de depdencia 
    // Controle de quando função deve ou não ser executada
    const[outronumero,setoutroNumero]=useState(0)


    useEffect(() =>{
        if(outronumero>0){
            console.log("Executando quando o outroNumero muda")
        }
    },[outronumero])

    // Cleanup do useEffect

    useEffect(() =>{
        const timer= setTimeout(() => {
            console.log("TESTE")

            setoutroNumero(outronumero+1)
        }, 2000);
            
        return () => clearTimeout(timer);

    },[outronumero])


    const[numero,setNumero]=useState(1)

    const mudanca = ()=>{
        setNumero(numero+1)
    }

    return(
        <div>
        <p>Numero: {numero}</p>
        <button onClick={mudanca}>Executar</button>
        <p>outro Numero: {outronumero}</p>
        <button onClick={()=> setoutroNumero(outronumero+1)}>Mudar Numero</button>
        </div>
    )
}

export default HookUseEffect