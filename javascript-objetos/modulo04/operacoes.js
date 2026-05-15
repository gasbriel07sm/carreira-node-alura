// convertendo e desconvertendo JSON
const estudante = require('./estudante.json');

// converter JSON em string
const stringEstudante = JSON.stringify(estudante);
//console.log(stringEstudante)
//console.log(typeof stringEstudante)

// desconvertendo JSON em string
const arquivoJSON = JSON.parse(stringEstudante);
//console.log(arquivoJSON);
//console.log(typeof arquivoJSON);