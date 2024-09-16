//Calculando Valores em Arrays de Objetos - ○ Objetivo: Crie um array de objetos alunos, cada um com propriedades nome, nota1, e nota2. Use for of para calcular a média das notas de cada aluno e exibir o nome do aluno junto com sua média.
let alunos = [
    {nome: "Pedro", nota1: 8, nota2: 6},
    {nome: "Ângela", nota1: 9, nota2: 3},
    {nome: "Maycon", nota1: 5, nota2: 10},
    {nome: "Rubens", nota1: 6, nota2: 6}
]

for(let aluno of alunos){
    let media = (aluno.nota1 + aluno.nota2) / 2;
    if(aluno.nome.slice(-1) === 'a'){
        console.log(`A aluna ${aluno.nome} teve média ${media}.`);
    } else {
        console.log(`O aluno ${aluno.nome} teve média ${media}.`);
    }
    
}