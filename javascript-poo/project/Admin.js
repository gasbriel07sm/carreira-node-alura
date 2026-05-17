import User from "./User.js";
// extends -> herança
export default class Admin extends User {
    constructor(nome, email, nascimento, role = 'admin', ativo = true) {
        // superclasse -> esses parametros estao definidos na User, de onde ele esta herdando
        super(nome, email, nascimento, role, ativo);
    }

    criarCurso(nomeCurso, qtdVagas) {
        return `Curso ${nomeCurso} criado com ${qtdVagas} vagas`
    }
}

//const admin = new Admin('Gabriel', 'd@.com', '2024-01-01');
//console.log(admin.exibirInfos())
