import React from 'react'
import Menu from '../../components/menu/Menu'
import ProfessoChat from '../../components/professorChat'

import './style.css'

function PageChat(){

    const professores = [
        { nome: "Antonio",status: "online" },
        { nome: "Carlos",status: "online" },
        { nome: "Felipe",status: "online" },
        { nome: "Andres",status: "online" },
        { nome: "Zeca",status: "online" },
        { nome: "Luis",status: "online" },
        { nome: "Toninho",status: "online" },
        { nome: "danilo",status: "online" },
    ]

  
    return(
        
            <div className="ctn-page">
                <div >
                   <Menu />
                </div>

                <div className="ctn-body">
                    <h1>Chat</h1>
                    <section className="ctn-professores">
                        {professores.map(
                            professor =>(
                                <div className="style-professor">
                                    <ProfessoChat nome={professor.nome} status={professor.status} />
                                </div>                       
                            )
                            )}
                        
                    </section>
                </div>

            </div>
        
    )
}

export default PageChat;