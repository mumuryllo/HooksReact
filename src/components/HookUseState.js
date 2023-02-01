import {useState} from "react";

const HookUseState =()=>{
   
    // 1- UseState
    // funciona como um getter e setter e eu posso atribuir ou alterar valores
     let user="Muryllo";
     const [name, setName]= useState('Teste')
     const [age, setAge]= useState(18)

     const mudarNome =()=>{
        user = 'Muryllo Soares'
        setName ('Mattheus Souza')
     }

     const handleSubmit = (e)=>{
        e.preventDefault()

        // envio a uma Api
        console.log(age)
     }

    return(
        <div>
                    <h1>useState</h1>
         <p>Variável: {user}</p>
         <p>useState {name}</p>
         <button onClick={mudarNome}>Mudar Nome</button>
         {/*  2- useState e inputs */}
         <p>Digite a sua idade:</p>
         <form onSubmit={handleSubmit}>
            <input
             type={'text'}
             value={age}
             onChange={(e)=> setAge(e.target.value)}
            />
            <input type={'submit'} value="Enviar"/>
         </form>
         <p>Você tem {age} anos!</p>
         <hr/>
        </div>
    )
}

export default HookUseState