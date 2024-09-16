//Filtrando Propriedades de Objetos - Objetivo: Dado um objeto produto com várias propriedades, crie uma função que retorna um novo objeto contendo apenas as propriedades cujo valor seja maior que um valor específico. Use for in para filtrar as propriedades. 
let produto = {
    nome: "televisao",
    preco: 2000,
    aparelhosVendidos: 150,
    garantia: 12,
    estoque: 100
};

function propriedades(objeto, valorMinimo) {
    let novoObjeto = {};

    for (let propriedade in objeto) {
        if(typeof objeto[propriedade] === 'number' && objeto[propriedade] > valorMinimo) {
            novoObjeto[propriedade] = objeto[propriedade];
        }
    }

    return novoObjeto;
}

console.log(propriedades(produto, 25))