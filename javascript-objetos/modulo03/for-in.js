const estudante = {
    nome: 'José Silva',
    idade: 32,
    cpf: '12345678901',
    turma: 'JavaScript',
    bolsista: true,
    telefones: ['988451215', '996995371'],
    endereco: [{
        rua: 'Rua Teste Climber',
        numero: '1324',
        complemento: 'apto 24'
    },
    {
        rua: 'Rua Teste 2',
        numero: '71',
        complemento: null
    }]
}

for (let chave in estudante) {
    const tipo = typeof estudante[chave];
    if (tipo !== 'object' && tipo !== 'function') {
        console.log(chave + ": " + estudante[chave]);
    }
}
