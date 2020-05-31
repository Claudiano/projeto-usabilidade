import React, { Component } from 'react'

import './style.css'
import { render } from '@testing-library/react'

export default class LoginPage extends Component{

    state = {
        senha: '',
        login: ""

    }

    logar = () => {
        alert("usuario: " + this.state.login + ", senha: "+ this.state.senha)
    }

    render() {

        return(
            <div className="ctn-page">
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