// Crie 3 variáveis de tipos diferentes, utilize template strings para combinar os diferentes tipos de dados (number, string, boolean) em uma única string e exiba o resultado no console.

const idade = 20;
const nome = 'Gabriel';
const eEstudante = true;

const frase = `${nome} tem ${idade} anos de idade, é estudante? ${eEstudante ? 'SIM' : 'NÃO'}`;
console.log(frase);