import React, { Component } from 'react'
import Menu from '../../components/menu/Menu';


export default class Home extends Component {

    // armazenar no local storage
    state = this.props.location.state

    
    render() {
        
        console.log(this.state.user)
        return(
            <>  
                <Menu />
            </>
        );
    }
}

