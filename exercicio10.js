//Criando Relatórios com Objetos e Arrays - Objetivo: Crie um array de objetos vendas, onde cada objeto tem produto, quantidade e valor. Use forEach para calcular o valor total de vendas de todos os produtos. 
let vendas = [
    {produto:"Televisao", quantidade:20, valor:2000},
    {produto:"Ar Condicionado", quantidade:30, valor:1800},
    {produto:"Monitor", quantidade:25, valor:1200},
    {produto:"Cadeira", quantidade:15, valor:780}
]

let totalVendas = 0;

vendas.forEach(function(venda) {
    totalVendas += venda.quantidade * venda.valor;    
})
console.log(`Total de vendas: R$ ${totalVendas.toFixed(2)}`)