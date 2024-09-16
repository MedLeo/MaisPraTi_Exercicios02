//Criando Novos Arrays a Partir de Objetos - ○ Objetivo: Crie um array de objetos filmes, onde cada filme tem titulo, diretor, e anoLancamento. Use forEach para criar um novo array contendo apenas os títulos dos filmes. 
let filmes = [
    {titulo: "Elvis", diretor: "Baz Luhrmann", anoLancamento: "2022"},
    {titulo: "Homem-Aranha: Sem Volta para Casa", diretor: "Jon Watts", anoLancamento: "2021"},
    {titulo: "Soul", diretor: "Pete Docter, Kemp Powers", anoLancamento: "2021"},
    {titulo: "Coringa", diretor: "Todd Phillips", anoLancamento: "2019"}
]

let titulos = [];

filmes.forEach((filme) => {
    titulos.push(filme.titulo)
});

console.log(titulos);