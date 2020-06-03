import React, { Component } from 'react'
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';

import './styles.css'
import Menu from '../menu/Menu';

export default class HeaderComponent extends Component{

    state = {
        showMenu: false,
    }

    showModal = () => {
        this.setState({showMenu: this.state.showMenu ? false : true})
    };
    
    render(){
        return(
            <div className="ctn-header"> 
                <div className="header-logo">
                    <img src={require('../../images/unifacisa.png')} /> 
                </div> 
                <div className="header-menu">
                  
                    <IconButton onClick={this.showModal}>
                        <MenuIcon></MenuIcon>
                    </IconButton>
                    
               
                    <div className="ctn-menu">
                        <Menu showMenu={this.state.showMenu}  />
                    </div>
                </div>       
            </div>
        )
    }
}