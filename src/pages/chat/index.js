import React, {useState, Component} from 'react'
import Menu from '../../components/menu/Menu'
import ProfessoChat from '../../components/professorChat'

import './style.css'
import ChatMensagens from '../../components/chatMensagens'

export default class PageChat extends Component{

    state = {
        show: false,
        professores : [
            { nome: "Antonio",status: "online" },
            { nome: "Carlos",status: "online" },
            { nome: "Felipe",status: "online" },
            { nome: "Andres",status: "online" },
            { nome: "Zeca",status: "online" },
            { nome: "Luis",status: "online" },
            { nome: "Toninho",status: "online" },
            { nome: "danilo",status: "online" },
        ]
    
    }

    showModal = () => {
       this.setState({show: true})
      };
    
    hideModal = () => {
        this.setState({show: false})
    };

    render() {   
        const professores = this.state.professores 
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
                                    <div className="ctn-professor"> 
                                        <div className="ctn-logo"> </div>

                                        <h1> Nome: {professor.nome}</h1> 
                                        <h1> Status: {professor.status}</h1> 

                                        <button className="btn-chat" onClick={ this.showModal}>CHAMAR</button>
                                    </div>
                            </div>           
                                        
                                        )
                                        )}
                </section>
                <ChatMensagens show={this.state.show} handleClose={this.hideModal}/>
    
            </div>

        </div>
        
        )
    }
       
}