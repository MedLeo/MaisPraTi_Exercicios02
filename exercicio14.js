//Manipulando Objetos Complexos - Objetivo: Crie um objeto empresa com uma propriedade departamentos, que é um array de objetos. Cada departamento tem um nome e uma lista de funcionarios. Use for in e for of para iterar sobre os departamentos e seus funcionários, exibindo o nome de cada funcionário junto com o departamento ao qual pertence. 
let empresa = {
    departamentos: [
        {nome:"Logistica", funcionarios: ["Pedro", "Ana", "Maria"]},
        {nome:"Administrativo", funcionarios: ["José", "Cris"]},
        {nome:"Segurança do trabalho", funcionarios: ["João", "Camila"]},
        {nome:"RH", funcionarios: ["Alex", "Joana"]}
    ]
}

for (let i in empresa.departamentos) {
    let departamento = empresa.departamentos[i];

    for(let funcionario of departamento.funcionarios){
        console.log(`Funcionário: ${funcionario}, Setor: ${departamento.nome}`)
    }
}