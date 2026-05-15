// LISTAS
const estudante = {
    nome: 'José Silva',
    idade: 32,
    cpf: '12345678901',
    turma: 'JavaScript',
    bolsista: true,
    telefone: ['34996995371', '988451215'],
    
    endereco: [{
        rua: 'Rua Joseph Climber',
        numero: '45',
        complemento: 'apto 45'
    }]
}

// adicionando
estudante.endereco.push({
    rua: 'Rua Matilde',
    numero: '71',
    complemento: ''
})

console.log(estudante.endereco);
console.log(estudante.endereco[0]);

const listaEnderecosComComplementos = estudante.endereco.filter(endereco => endereco.complemento);
console.log(listaEnderecosComComplementos);