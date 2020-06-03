import React, { Component } from 'react'
import Menu from '../../components/menu/Menu';
import HeaderComponent from '../../components/header';
import Footer from '../../components/footer';


export default class Home extends Component {

    // armazenar no local storage
    state = this.props.location.state

    
    render() {
        
        console.log(this.state.user)
        return(
            <>
            <HeaderComponent />  

            <div className="ctn-body">
                <div ctn-logo>log</div>
                <div ctn-info>
                    <h1>Seja bem vindo</h1>
                </div>
            </div>

            <Footer />
            </>
        );
    }
}

