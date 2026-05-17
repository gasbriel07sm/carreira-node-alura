import User from "../project/User.js";
import Admin from "../project/Admin.js";
import Docente from "../project/Docente.js";

const novoUser = new User('Juliana', 'j@j', '2024-01-01');
console.log(novoUser.exibirInfos());
novoUser.nome = ''
console.log(novoUser.nome)

// ENCAPSULAMENTO
// privado -> usando cerquilha

//novoUser.nome = 'Marcia'
//console.log(novoUser.exibirInfos());

