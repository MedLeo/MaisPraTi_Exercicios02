# MaisPraTi_Exercicios02

__Com Node.js:__
```bash
Instale o pacote prompt-sync:
npm install prompt-sync
```

__Para receber entrada de dados do usuário, inicie o prompt-sync:__
```bash
const prompt = require('prompt-sync')();
```

## Lista de exercícios:

### Manipulação de Objetos 

    __1. Acessando Propriedades de Objetos__
        * Objetivo: Crie um objeto carro com propriedades como marca, modelo, ano, e cor. Use for in para iterar sobre as propriedades e exibir seus valores no console. 

    __2. Verificando Propriedades__
        * Objetivo: Crie um objeto livro com propriedades titulo, autor, anoPublicacao e genero. Verifique se a propriedade editora existe no objeto usando for in. Se não existir, adicione essa propriedade ao objeto. 

    __3. Filtrando Propriedades de Objetos__
        * Objetivo: Dado um objeto produto com várias propriedades, crie uma função que retorna um novo objeto contendo apenas as propriedades cujo valor seja maior que um valor específico. Use for in para filtrar as propriedades. 

### Manipulação de Arrays de Objetos com for of 

    __4. Iterando Sobre Arrays de Objetos__
        * Objetivo: Crie um array de objetos pessoas, onde cada objeto representa uma pessoa com nome, idade, e cidade. Use for of para exibir as informações de cada pessoa no console. 

    __5. Calculando Valores em Arrays de Objetos__
        * Objetivo: Crie um array de objetos alunos, cada um com propriedades nome, nota1, e nota2. Use for of para calcular a média das notas de cada aluno e exibir o nome do aluno junto com sua média.

    __6. Filtrando Arrays de Objetos__
        * Objetivo: Crie um array de objetos funcionarios, onde cada objeto contém informações como nome, cargo, e salario. Use for of para filtrar e exibir apenas os funcionários cujo salário seja maior que um valor específico. 

### Manipulação de Arrays de Objetos com forEach 

    __7. Modificando Objetos em um Array__
        * Objetivo: Crie um array de objetos produtos, onde cada objeto tem nome, preco, e desconto. Use forEach para aplicar um desconto de 10% em todos os produtos e exibir o novo preço. 

    __8. Criando Novos Arrays a Partir de Objetos__
        * Objetivo: Crie um array de objetos filmes, onde cada filme tem titulo, diretor, e anoLancamento. Use forEach para criar um novo array contendo apenas os títulos dos filmes. 

    __9. Contabilizando Elementos com uma Condição__
        * Objetivo: Crie um array de objetos clientes, cada um com propriedades nome, idade, e cidade. Use forEach para contar quantos clientes têm mais de 30 anos. 

### Combinação de Estruturas 

    __10. Criando Relatórios com Objetos e Arrays__
        * Objetivo: Crie um array de objetos vendas, onde cada objeto tem produto, quantidade e valor. Use forEach para calcular o valor total de vendas de todos os produtos. 

    __11. Agrupando Elementos com forEach__
        * Objetivo: Crie um array de objetos pedidos, onde cada pedido tem cliente, produto, e quantidade. Use forEach para criar um objeto que agrupa a quantidade total de produtos por cliente.

    __12. Atualizando um Array de Objetos__
        * Objetivo: Crie um array de objetos estoque, onde cada objeto tem produto, quantidade e minimo. Use forEach para atualizar a quantidade dos produtos que estão abaixo do mínimo, duplicando suas quantidades. 

    __13. Implementando um Carrinho de Compras__
        * Objetivo: Crie um objeto carrinho com uma propriedade itens, que é um array de objetos. Cada objeto dentro de itens deve representar um produto no carrinho, com nome, quantidade, e precoUnitario. Use forEach para calcular o valor total do carrinho. 

    __14. Manipulando Objetos Complexos__
        * Objetivo: Crie um objeto empresa com uma propriedade departamentos, que é um array de objetos. Cada departamento tem um nome e uma lista de funcionarios. Use for in e for of para iterar sobre os departamentos e seus funcionários, exibindo o nome de cada funcionário junto com o departamento ao qual pertence. 

    __15. Filtrando e Somando Valores__
        * Objetivo: Crie um array de objetos transacoes, onde cada transação tem tipo (entrada ou saída) e valor. Use forEach para calcular o saldo final, somando as entradas e subtraindo as saídas.
