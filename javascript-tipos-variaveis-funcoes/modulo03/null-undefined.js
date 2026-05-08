let nomeEstudante; // quando não atribuimos valor será undefined (indefinido)
console.log(nomeEstudante);
console.log(typeof nomeEstudante);

let telefoneEstudante = null; // não existe nenhum valor (o campo existe, mas sem valor)
console.log(telefoneEstudante);
console.log(typeof telefoneEstudante);

console.log("########################");
console.log(nomeEstudante + 3); // retorna NaN
console.log(telefoneEstudante + 3); // se comporta como 0 neste caso