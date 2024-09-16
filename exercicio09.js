//Contabilizando Elementos com uma Condição - Objetivo: Crie um array de objetos clientes, cada um com propriedades nome, idade, e cidade. Use forEach para contar quantos clientes têm mais de 30 anos. 
let clientes = [
    {nome:"Ana", idade:"25", cidade:"Rio de Janeiro"},
    {nome:"Carlos", idade:"38", cidade:"São Paulo"},
    {nome:"Antonio", idade:"20", cidade:"Fortaleza"},
    {nome:"Maria", idade:"39", cidade:"Brasília"}
]

let count = 0;

clientes.forEach(function(cliente) {
    if(cliente.idade > 30){
        count++
    }
})

console.log(`Quantidade de clientes acima de 30 anos: ${count} clientes.`);