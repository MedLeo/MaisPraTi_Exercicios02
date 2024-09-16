//Iterando Sobre Arrays de Objetos - Objetivo: Crie um array de objetos pessoas, onde cada objeto representa uma pessoa com nome, idade, e cidade. Use for of para exibir as informações de cada pessoa no console. 
let pessoas = [
    { nome: "Maria", idade: 10, cidade: "Rio de Janeiro"},
    { nome: "Joana", idade: 40, cidade: "São Paulo"},
    { nome: "Marcos", idade: 38, cidade: "Salvador"},
    { nome: "Monique", idade: 20, cidade: "Florianópolis"},
    { nome: "Pedro", idade: 18, cidade: "Goiânia"}
];

for (let pessoa of pessoas){
    console.log(`Nome: ${pessoa.nome}, Idade: ${pessoa.idade}, Cidade: ${pessoa.cidade}`);
}
