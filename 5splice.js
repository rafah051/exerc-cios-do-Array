const nomes = ["João", "Ana", "Caio", "Lara", "Marjorie", "Leo"];

// Ana e Caio mudaram de escola e o Rodrigo entrou nessa sala. Nosso desafio será atualizar a lista de chamada, removendo os nomes de Ana e Caio, e inserindo Rodrigo.

//nomes.splice(indice do elemento que queremos remover, quantidade de elementos que quero remover)
let nomesAtualizado = nomes.splice(1,2, "Rodrigo");
nomes.push("Rodrigo")
console.log(nomes)

//push ou splice

//nomes.splice(indice do elemento que queremos remover, quantidade de elementos que quero remover, se quiser adicionar algo)
