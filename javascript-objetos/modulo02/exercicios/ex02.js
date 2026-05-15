const pessoa = {
    nome: 'Gabriel',
    idade: 20,
    solteiro: false,
    hobbies: ['Estudar', 'Jogar', 'Programar'],
    endereco: {
        rua: 'Rua Leninha Rocha Borges',
        cidade: 'Araxá',
        estado: 'Minas Gerais'
    }
}

function mostrarInfoPessoa(obj) {
    //for (let o in obj) {
    //    console.log(o + ": " + obj[o]);
    //}
    console.log(`Nome: ${obj.nome}`)
    console.log(`Idade: ${obj.idade}`)
    console.log(`Solteiro: ${obj.solteiro}`)
    console.log(`Hobbies: ${obj.hobbies.toString()}`)
    console.log(`Endreço - RUA: ${obj.endereco.rua}`)
    console.log(`Endreço - CIDADE: ${obj.endereco.cidade}`)
    console.log(`Endreço - ESTADO: ${obj.endereco.estado}`)

}

mostrarInfoPessoa(pessoa);

