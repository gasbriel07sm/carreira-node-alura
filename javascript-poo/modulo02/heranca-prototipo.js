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

const admin = {
    nome: 'Mariana',
    email: 'm@gmail.com',
    nascimento: '2024-01-01',
    role: 'admin',
    ativo: true, 

    criarCurso() {
        console.log(`Curso criado.`)
    }
}

Object.setPrototypeOf(admin, user); // definindo um protótipo, admin usar como modelo/base o objeto user, ou seja o objeto que fornece
admin.criarCurso();
admin.exibirInfos();