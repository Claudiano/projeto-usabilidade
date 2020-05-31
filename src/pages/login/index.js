import React, { Component } from 'react'

import './style.css'
import ServiceDb from '../../provider/serviceDb'
import history from '../../history'


export default class LoginPage extends Component{

    state = {
        senha: '',
        login: ""

    }

    logar = () => {
        let service = new ServiceDb
        let result = service.validateUser(this.state.login, this.state.senha)

        if(result){
            history.push("/home", {user: result})
        } else {
            alert("usuario não encontrado")
        }
    }

    render() {

        return(
            <div className="ctn-pageLogin">
                <div className="ctn-login">        
                    <div className="ctn-form">
                        <h1>Bem vindo</h1>
                        <input 
                            onChange={(e) => {
                                this.setState({login: e.target.value})
                            } } 
                            
                            placeholder="Usuario" />
                        
                        <input 
                            onChange={(e) => {
                                this.setState({senha: e.target.value})
                            } } 
                            type="password"
                            placeholder="senha"/>

                        <button onClick={this.logar} >Logar</button>

                    </div>
                    <div className="ctn-info">
                        <h1>Inserir logo</h1>                        
                    </div>
                </div>
            </div>
        )
    }
    
  
}