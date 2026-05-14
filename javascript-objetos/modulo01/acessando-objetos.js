const obj = {
    nome: 'José Silva',
    idade: 32,
    cpf: '12345678901',
    turma: 'JavaScript'
}

// objetos sempre são compostos de um conjunto de chave e valor

// ACESSANDO ARRAYS
console.log(obj);

// notação ponto
console.log("\n---- NOTAÇÃO PONTO ----")
console.log(obj.nome);
console.log(obj.idade);
console.log(obj.cpf);
console.log(obj.turma);

// notação chave
console.log("\n---- NOTAÇÃO CHAVE ----")
console.log(obj['nome']);
console.log(obj['idade']);
console.log(obj['cpf']);
console.log(obj['turma']);