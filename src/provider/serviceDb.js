

export default class ServiceDb{

    // Perfil 1 para aluno
    // Perfil 2 para professor
    usuarios = [
        { id: 1, login:"antonio", senha: "antonio", nome: "Antonio",status: false, perfil:1  },
        { id: 2, login:"danilo", senha: "danilo", nome: "Danilo",status: false, perfil:1  },
        { id: 3, login:"claudiano", senha: "claudiano", nome: "Claudiano",status: false, perfil:1  },
        { id: 4, login:"carlos", senha: "Carlos", nome: "Carlos",status: true, perfil:2  },
        { id: 5, login:"daniel", senha: "daniel", nome: "Daniel",status: true, perfil:2  },
        { id: 6, login:"fred", senha: "fred", nome: "Fred",status: true, perfil:2  },


        { id: 6, login:"fred", senha: "fred", nome: "Fred",status: true, perfil:2  },
        { id: 6, login:"fred", senha: "fred", nome: "Fred",status: true, perfil:2  },
        { id: 6, login:"fred", senha: "fred", nome: "Fred",status: true, perfil:2  },
        { id: 6, login:"fred", senha: "fred", nome: "Fred",status: true, perfil:2  },
        { id: 6, login:"fred", senha: "fred", nome: "Fred",status: true, perfil:2  },
        { id: 6, login:"fred", senha: "fred", nome: "Fred",status: true, perfil:2  },
        { id: 6, login:"fred", senha: "fred", nome: "Fred",status: true, perfil:2  },
        { id: 6, login:"fred", senha: "fred", nome: "Fred",status: true, perfil:2  },
        { id: 6, login:"fred", senha: "fred", nome: "Fred",status: true, perfil:2  },
        { id: 6, login:"fred", senha: "fred", nome: "Fred",status: true, perfil:2  },
        { id: 6, login:"fred", senha: "fred", nome: "Fred",status: true, perfil:2  },
        { id: 6, login:"fred", senha: "fred", nome: "Fred",status: true, perfil:2  },

    ]


    validateUser(login, senha){
        let result = null

        this.usuarios.forEach(user => {
            if (user.login === login && user.senha === senha) {
                let pos = this.usuarios.indexOf(user)
                this.usuarios[pos].status = true
                result = this.usuarios[pos]
            }
        });
        
        return result

    }


    listarProfessoresOnline(){
        let lista = []

        this.usuarios.forEach((user) => {
            if (user.perfil === 2 && user.status === true){
                lista.push(user)
                console.log(user)
            }
        })

        return lista
    }
}