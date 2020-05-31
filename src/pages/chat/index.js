import React, {useState, Component} from 'react'
import Menu from '../../components/menu/Menu'
import ProfessoChat from '../../components/professorChat'

import './style.css'
import ChatMensagens from '../../components/chatMensagens'
import ServiceDb from '../../provider/serviceDb'

export default class PageChat extends Component{
        
    state = {
        show: false,
        professores : []      
    }

    componentDidMount(){
        this.loadUsers();
    }
    
    loadUsers = async () => {
        let service = new ServiceDb()
        let users = service.listarProfessoresOnline()
        //console.log(users)
        this.setState({professores: users})
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
           
            <div className="ctn-pageChat">
                
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
                <div className="ctn-chat">

                    <ChatMensagens show={this.state.show} handleClose={this.hideModal}/>
                </div>

            </div>
    

        </div>
        
        )
    }
       
}