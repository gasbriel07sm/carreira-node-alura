import User from "../project/User.js";
import Admin from "../project/Admin.js";
import Docente from "../project/Docente.js";

const novoUser = new User('Juliana', 'j@j', '2024-01-01');
console.log(novoUser.exibirInfos());

const dadosFic = User.exibirInfos('Cassio', 'c##');
console.log(dadosFic);

//const novoAdmin = new Admin('Rodrigo', 'r@@', '2024-01-01');
//console.log(novoAdmin.exibirInfos());
//
//const novaDocente = new Docente('Ana', 'a@@', '2024-01-01');
//console.log(novaDocente.exibirInfos());