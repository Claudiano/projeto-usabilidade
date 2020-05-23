import React from 'react'
import Menu from '../../components/menu/Menu'
import ProfessoChat from '../../components/professorChat'

import './style.css'



function PageChat(){

  
    return(
        
            <div className="ctn-page">
                <div >
                   <Menu />
                </div>

                <div className="ctn-professores">
                    <div className="ctn-professor">
                        <ProfessoChat />
                    </div>
                    
                    <div className="ctn-professor">
                        <ProfessoChat />
                    </div> 
                    
                    <div className="ctn-professor">
                        <ProfessoChat />
                    </div> 
                    
                    <div className="ctn-professor">
                        <ProfessoChat />
                    </div>

                    <div className="ctn-professor">
                        <ProfessoChat />
                    </div>

                </div>

            </div>
        
    )
}

export default PageChat;