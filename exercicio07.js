// Modificando Objetos em um Array - Objetivo: Crie um array de objetos produtos, onde cada objeto tem nome, preco, e desconto. Use forEach para aplicar um desconto de 10% em todos os produtos e exibir o novo preço. 
let produtos = [
    {nome:"Televisao", preco:"2000", desconto: 0},
    {nome:"Aspirador", preco:"1000", desconto: 0},
    {nome:"Monitor", preco:"999", desconto: 0},
    {nome:"Ar Condicionado", preco:"1500", desconto: 0},
    {nome:"Cadeira", preco:"700", desconto: 0}
]

produtos.forEach((produto) => {
    let desconto = (produto.preco / 10)
    produto.preco -= desconto;
    console.log(`Produto: ${produto.nome}, novo preço: R$ ${produto.preco.toFixed(2)}`)
});