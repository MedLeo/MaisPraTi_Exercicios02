// Filtrando e Somando Valores - Objetivo: Crie um array de objetos transacoes, onde cada transação tem tipo (entrada ou saída) e valor. Use forEach para calcular o saldo final, somando as entradas e subtraindo as saídas.
let transacoes = [
    {tipo: "entrada", valor: 150},
    {tipo: "saída", valor: 20},
    {tipo: "entrada", valor: 30},
    {tipo: "saída", valor: 100},
    {tipo: "entrada", valor: 40}
]

let saldoFinal = 0;

transacoes.forEach((transacao) => {
    if(transacao.tipo === "entrada"){
        saldoFinal += transacao.valor;
    } else {
        saldoFinal -= transacao.valor;
    }
})

console.log(`Saldo final: R$ ${saldoFinal.toFixed(2)}`);