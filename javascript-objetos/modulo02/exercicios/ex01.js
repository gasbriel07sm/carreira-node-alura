const pessoa = {
    nome: 'Gabriel',
    idade: 20,
    solteiro: false,
    hobbies: ['Estudar', 'Jogar', 'Programar']
}

function mostrarInfoPessoa(obj) {
    //for (let o in obj) {
    //    console.log(o + ": " + obj[o]);
    //}
    console.log(`Nome: ${obj.nome}`)
    console.log(`Idade: ${obj.idade}`)
    console.log(`Solteiro: ${obj.solteiro}`)
    console.log(`Hobbies: ${obj.hobbies.toString()}`)
}

mostrarInfoPessoa(pessoa);

