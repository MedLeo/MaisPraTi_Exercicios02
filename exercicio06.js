//Filtrando Arrays de Objetos - ○ Objetivo: Crie um array de objetos funcionarios, onde cada objeto contém informações como nome, cargo, e salario. Use for of para filtrar e exibir apenas os funcionários cujo salário seja maior que um valor específico.
let funcionarios = [
    {nome: "Pedro", cargo: "Motorista", salario: 2500},
    {nome: "Maria", cargo: "Diretora", salario: 12500},
    {nome: "Rubens", cargo: "Recepcionista", salario: 2000},
    {nome: "Antonio", cargo: "Copeiro", salario: 1500},
    {nome: "Cris", cargo: "Gerente", salario: 5500}
]

let valorEspecifico = 3000;

for(let funcionario of funcionarios){
    if(funcionario.salario > valorEspecifico){
        console.log(funcionario)
    }        
}