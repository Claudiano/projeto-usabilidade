import React from 'react'

import "./styles.css"
import HeaderComponent from '../../components/header'
import Footer from '../../components/footer'

export default function TurmasPage(){
    return(
        <>
            <HeaderComponent />

            <div className="ctn-page">
                <div className="ctn-titulo">
                    <h1>Turmas</h1>

                </div>
                <div className="ctn-turmas">
                    
                </div>
            </div> 

            <Footer />
        </>
    )
}