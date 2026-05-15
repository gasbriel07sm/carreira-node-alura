const estudante = {
    nome: 'José Silva',
    idade: 32,
    cpf: '12345678901',
    turma: 'JavaScript',
    bolsista: true,
    telefones: ['1234567890', '9876543210'],
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

function exibirTelefones(telefone1, telefone2) {
    console.log(`ligar para ${telefone1}`);
    console.log(`ligar para ${telefone2}`);
}

exibirTelefones(...estudante.telefones); // espalhando o conteúdo com spread operator

const dadosEnvio = {
    destinatario: estudante.nome,
    ...estudante.enderecos[0]
}

console.log(dadosEnvio)