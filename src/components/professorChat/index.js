import React from 'react'

import './styles.css'
import ChatMensagens from '../chatMensagens'

function ProfessoChat(props){

    const visible = true
    const professor = {
        nome: props.nome,
        disciplina: props.disciplina,
        status: props.status,
    }

  

    return (
        <div className="ctn-professor"> 
           <div className="ctn-logo"> </div>

           <h1> Nome: {professor.nome}</h1> 
           <h1> Status: {professor.status}</h1> 
           <button className="btn" onClick={ (e) => console.log("botão clicado")}>CHAMAR</button>

        </div>
    )
}



export default ProfessoChat;

{/* https://www.youtube.com/watch?v=n0XTxlp68wc */ }