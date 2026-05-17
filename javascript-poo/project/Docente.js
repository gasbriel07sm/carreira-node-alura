import User from "./User.js";
// extends -> herança
class Docente extends User {
    constructor(nome, email, nascimento, role = 'docente', ativo = true) {
        // superclasse -> esses parametros estao definidos na User, de onde ele esta herdando
        super(nome, email, nascimento, role, ativo);
    }

    aprovarEstudante(estudante, curso) {
        return `Estudante ${estudante} foi aprovado no curso ${curso}, responsável ${this.nome}`;
    }
}

const docente = new Docente('louco', 'd@.com', '2024-01-01');
console.log(docente);
console.log(docente.exibirInfos());
console.log(docente.aprovarEstudante('Gabriel', 'Cientista de DADOS'))