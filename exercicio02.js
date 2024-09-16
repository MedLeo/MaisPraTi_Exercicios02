//Verificando Propriedades - Objetivo: Crie um objeto livro com propriedades titulo, autor, anoPublicacao e genero. Verifique se a propriedade editora existe no objeto usando for in. Se não existir, adicione essa propriedade ao objeto. 
let livro = {
    titulo: "O Pequeno Príncipe",
    autor: "Antoine de Saint-Exupéry",
    anoPublicacao: 1943,
    genero: "Fábula"    
};

let editoraUp = false;
for (let propriedade in livro){
    if(propriedade === "editora"){
        editoraUp = true; 
        break;       
    }
};

if (!editoraUp) {
    livro.editora = "Reynal & Hitchcock";
}

console.log(livro);