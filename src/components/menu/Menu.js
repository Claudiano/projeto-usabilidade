import React from 'react'

import "./styles.css"
import { Link } from 'react-router-dom';

function Menu({ showMenu}){

    const showHideClassName = showMenu ? "ctn-menu" : "display-none"

    const pages = [
        {name: "Inicio", path: "/home"},
        {name: "Turmas", path: "/turmas"},
        {name: "chat", path: "/chat"},
        {name: "sair", path: "/"},
    ]

     
    return(
       
        <div className={showHideClassName}>
            <div className="cnt-image">
                <img src={require('../../images/user-icon.png')} />  
            </div>
            <div className="list-menu">
                {pages.map( page => (
                    <div className="menu-item">
                        <Link  to={page.path} >{page.name}</Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Menu;