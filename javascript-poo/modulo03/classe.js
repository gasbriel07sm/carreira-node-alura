// criando uma classe
class User {
    // função para construir
    constructor(nome, email, nascimento, role, ativo = true) {
        this.nome = nome;
        this.email = email;
        this.nascimento = nascimento;
        this.role = role || 'estudante';
        this.ativo = ativo;
    }

    exibirInfos() {
        return `${this.nome}, ${this.email}`;
    }

}

const user1 = new User('Gabriel', 'email.com', '2007-25-06');
//console.log(user1)
//console.log(user1.exibirInfos())

console.log(User.prototype.isPrototypeOf(user1)); // protótipo, internamente temos um protótipo do User