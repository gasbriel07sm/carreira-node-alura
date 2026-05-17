export default class User {
    // função para construir
    #nome
    #email
    #nascimento
    #role
    #ativo
    constructor(nome, email, nascimento, role, ativo = true) {
        this.#nome = nome;
        this.#email = email;
        this.#nascimento = nascimento;
        this.#role = role || 'estudante';
        this.#ativo = ativo;
    }

    get nome() {
        return this.#nome;
    }

    get email() {
        return this.#email;
    }

    get nascimento() {
        return this.#nascimento;
    }

    get role() {
        return this.#role;
    }

    get ativo() {
        return this.#ativo;
    }

    set nome(nome) {
        if (nome === '') {
            throw new Error('formato do nome não é valido')
        }
        this.#nome = nome;
    }

    exibirInfos() {
        if (this.role === 'estudante') {
            return `dados estudantes: ${this.nome}, ${this.email}`;
        }
        if (this.role === 'admin') {
            return `dados admin: ${this.nome}, ${this.email}`;
        }
        if (this.role === 'docente') {
            return `dados docente: ${this.nome}, ${this.email}`;
        }
    }

    static exibirInfos(nome, email) {
        return `${nome}, ${email}`
    }

}

