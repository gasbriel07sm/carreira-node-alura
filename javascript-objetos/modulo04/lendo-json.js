// import estudante from './estudante.json';
const estudante = require('./estudante.json');

//console.log(estudante);
//console.log(typeof estudante); // convertendo para um objeto javascript

const chaves = Object.keys(estudante);
console.log(chaves);