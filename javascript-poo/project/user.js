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

user.exibirInfos();