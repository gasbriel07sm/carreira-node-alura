const user = {
    nome: 'Gabriel',
    email: 'gasmiranda07@gmail.com',
    nascimento: '2007-06-25',
    role: 'estudante',
    ativo: true, 

    exibirInfos() {
        console.log(`${this.nome} ${this.email}`)
    }
}

// user.exibirInfos();

// const exibir = user.exibirInfos // exibir perdeu contexto (conexão com o objeto user)
// exibir();

// é como se estivessemos fazendo:
const exibir = function() {
    console.log(this.nome, this.email);
}
// para darmos contexto podemos fazer:
const exibirNome = exibir.bind(user); // estamos amarrando o exibir ao objeto user
exibirNome()

// não usamos arrow functions para criar métodos, pois arrow functions só possuem contexto no momento em que são criadas