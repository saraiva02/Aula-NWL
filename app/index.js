const {select} = require('@inquirer/prompts')

const start = async () =>{

    while(true){

       let opcao = await select({ //await - esperar
            message: "Menu >",// mensagem
            choices: [
                {
                    name: "Cadastrar meta",
                    value: "cadastrar"
                },
                {
                    name: "Listar metas",
                    value: "listar"
                },
                {
                    name: "Sair",
                    value: "sair"
                }
            ] //escolhas
       })

       switch(opcao){
            case "cadastrar":
                console.log("Vamos cadastrar")
                break
            case "listar":
                console.log("Vamos listar")
                break
            case "sair":
                console.log("Até a próxima!")
                return
       }

    }
}

start()