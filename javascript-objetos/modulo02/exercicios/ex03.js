const pessoas = [
    { nome: 'Gabriel', idade: 20, cidade: 'Araxá' },
    { nome: 'Giovanna', idade: 18, cidade: 'Uberlândia' },
    { nome: 'Gabriela', idade: 23, cidade: 'Nova York' },
    { nome: 'Luiz', idade: 10, cidade: 'Abadia' },
    { nome: 'Otávio', idade: 48, cidade: 'Pernambuco' },
]

const mostrarListaPessoas = obj => {
    for (let o in obj) {
        console.log(`Nome: ${obj[o].nome}, Idade: ${obj[o].idade}, Cidade: ${obj[o].idade}`);
    }
}

const filtrarPorCidade = (obj, cidade) => obj.filter(o => o.cidade === cidade);


pessoas.push({ nome: 'Ana', idade: 20, cidade: 'Acre'})/

mostrarListaPessoas(pessoas);
console.log(filtrarPorCidade(pessoas, 'Araxá'));

