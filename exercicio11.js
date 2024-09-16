//Agrupando Elementos com forEach - Objetivo: Crie um array de objetos pedidos, onde cada pedido tem cliente, produto, e quantidade. Use forEach para criar um objeto que agrupa a quantidade total de produtos por cliente.
let pedidos = [
    {cliente: "Maria", produto: "Televisao", quantidade: 2},
    {cliente: "Joana", produto: "Telefone", quantidade: 1},
    {cliente: "Rubens", produto: "Monitor", quantidade: 2},
    {cliente: "Neves", produto: "Cadeira", quantidade: 3}
]

let produtoPorCliente = {};

pedidos.forEach((pedido) => {
    if(produtoPorCliente[pedido.cliente]){
        produtoPorCliente[pedido.cliente] += pedido.quantidade;
    } else {
        produtoPorCliente[pedido.cliente] = pedido.quantidade;
    }    
});

console.log(produtoPorCliente);