const estudantes = require('./estudantes.json');

function buscaDados(lista, chave, valor) {
    return lista.find(estudante => estudante[chave].includes(valor))
}

const estudanteEncontrado = buscaDados(estudantes, 'nome', 'Oralle');
console.log(estudanteEncontrado);

const telefoneEstudante = buscaDados(estudantes, 'telefone', '1198123183');
console.log(telefoneEstudante);