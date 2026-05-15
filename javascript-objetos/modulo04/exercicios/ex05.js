const pessoaOriginal = {
    id: 1,
    nome: "Alice",
    idade: 30
}

function f(obj) {
    Object.assign(obj, pessoaOriginal);
}

const novoObj = {};
f(novoObj);

novoObj.cidade = 'Cidade Legal'

console.log(novoObj);
console.log(pessoaOriginal)