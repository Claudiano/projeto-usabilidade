import React, {useState, Component} from 'react'
import Menu from '../../components/menu/Menu'
import './style.css'
import ChatMensagens from '../../components/chatMensagens'
import ServiceDb from '../../provider/serviceDb'
import HeaderComponent from '../../components/header'
import Footer from '../../components/footer'

export default class PageChat extends Component{
        
    state = {
        show: false,
        professores : [],
        professorSelecionado: {}      
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
    
    showModal = (p) => {
        this.setState({show: true})
    };
    
    hideModal = () => {
        this.setState({show: false})
    };
    
    render() {   
        const professores = this.state.professores 
        return(
           <>
            <HeaderComponent />
            <div className="ctn-pageChat">

            <div className="ctn-body">
                <h1>Chat</h1>
                <section className="ctn-professores">
                    {professores.map(
                        professor =>(
                            <div className="style-professor">
                                    <div className="ctn-professor"> 
                                        <div className="ctn-logo">
                                        <img src={require('../../images/user-icon.png')} />    
                                        </div>

                                        <h1> Nome: {professor.nome}</h1> 

                                        <button className="btn-chat" 
                                        onClick={ 
                                            (e) => {                                             
                                                this.setState({professorSelecionado: professor})
                                                this.showModal(professor)
                                                console.log(this.state.professorSelecionado)
                                                
                                            }                                        
                                        }>CHAMAR</button>
                                    </div>
                            </div>           
                                       
                        )
                    )}
                </section>
                <div className="ctn-chat">

                    <ChatMensagens show={this.state.show} handleClose={this.hideModal} userSelecionado={this.state.professorSelecionado}/>
                </div>

            </div>
    

        </div>
        <Footer />
        </>
        
        )
    }
       
}