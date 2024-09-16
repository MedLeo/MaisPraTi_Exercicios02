//Atualizando um Array de Objetos - Objetivo: Crie um array de objetos estoque, onde cada objeto tem produto, quantidade e minimo. Use forEach para atualizar a quantidade dos produtos que estão abaixo do mínimo, duplicando suas quantidades. 
let estoque = [
    {produto: "Televisão", quantidade: 4, minimo: 5},
    {produto: "Ar Condicionado", quantidade: 10, minimo: 5},
    {produto: "Monitor", quantidade: 12, minimo: 5},
    {produto: "Aspirador", quantidade: 3, minimo: 5}
]

estoque.forEach((objeto) => {
    if(objeto.quantidade < objeto.minimo){
        objeto.quantidade *= 2;
        console.log(`Quantidade de ${objeto.produto} atualizada para ${objeto.quantidade}.`)
    }
})
