import React from 'react'

import "./styles.css"
import { Link } from 'react-router-dom';

function Menu(){

    const pages = [
        {name: "Inicio", path: "/"},
        {name: "Turmas", path: "/turmas"},
        {name: "chat", path: "/chat"},
        {name: "sair", path: "/"},
    ]

    return(
        <div className="ctn-menu">
            <div className="cnt-image">
                <h1> Logo</h1>

            </div>
            <div className="list-menu">
                {pages.map( page => (
                    <div className="menu-item">
                        <Link to={page.path} >{page.name}</Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Menu;