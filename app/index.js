const {select, input} = require('@inquirer/prompts')

let meta = {
    value: "Tomar 3L de agua por dia.",
    checked: false,
}

let metas = [ meta ]

const cadastrarMeta = async () => {
    const meta = await input({message:"Digite a meta:"})

    if(meta.length == 0){
        console.log("A meta não pode ser vazia.")
        return
    }

    metas.push({value: meta, checked: false})
} 

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
                await cadastrarMeta()
                console.log(metas)
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