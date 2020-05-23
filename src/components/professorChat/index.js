import React from 'react'

import './styles.css'

function ProfessoChat(){

    const professor = {
        nome: "Carlos",
        Disciplina: "Sistemas multimidia",
        status: "Online"
    }

    return (
        <div className="ctn-professor"> 
            <div className="ctn-logo"> </div>

           <h1> Nome: {professor.nome}</h1> 
           <h1> Curso: {professor.Disciplina}</h1> 
           <h1> Status: {professor.status}</h1> 
        </div>
    )
}


export default ProfessoChat;