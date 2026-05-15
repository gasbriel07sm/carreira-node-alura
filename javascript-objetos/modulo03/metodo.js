const estudante = {
    nome: 'José Silva',
    idade: 32,
    cpf: '12345678901',
    turma: 'JavaScript',
    bolsista: true,
    telefones: ['988451215', '996995371'],
    enderecos: [{
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

const chavesObjeto = Object.keys(estudante);
console.log(chavesObjeto)

if (!chavesObjeto.includes('enderecos')) {
    console.error('É necessário ter um endereço cadastrado.')
}