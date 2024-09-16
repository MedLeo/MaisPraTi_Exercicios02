// Implementando um Carrinho de Compras - Objetivo: Crie um objeto carrinho com uma propriedade itens, que é um array de objetos. Cada objeto dentro de itens deve representar um produto no carrinho, com nome, quantidade, e precoUnitario. Use forEach para calcular o valor total do carrinho. 
let carrinho= {
    itens: [
        {nome: "banana", quantidade: 12, precoUnitario: 0.50},
        {nome: "maçã", quantidade: 5, precoUnitario: 0.50},
        {nome: "manga", quantidade: 7, precoUnitario: 1.70},
        {nome: "chicória", quantidade: 3, precoUnitario: 0.75},
        {nome: "melancia", quantidade: 1, precoUnitario: 3.50}
    ]
}

let totalCarrinho = 0;

carrinho.itens.forEach((item) => {
    totalCarrinho += item.quantidade * item.precoUnitario;    
})

console.log(`O valor total do carrinho é R$ ${totalCarrinho.toFixed(2)}`)