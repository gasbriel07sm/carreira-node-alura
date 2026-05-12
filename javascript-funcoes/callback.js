// criar uma funcao que faca operacoes matematicas entre 2 valores (soma e multiplicacao)
// funcao deve receber como parametros operacao desejada, valor 1 e valor 2

function soma(a, b) { return a + b };
function multiplica(a, b) { return a * b };

function calcula(fnOperacao, valorA, valorB) {
    return fnOperacao(valorA, valorB);
}

console.log(calcula(soma, 1, 4));
console.log(calcula(multiplica, 1, 4));

// criar uma funcao que emita uma mensagem caso o usuario x nao esteja interagindo com o sistema apos quantidade y de tempo

const userId = '4545656';
const avisaUsuario = userId => console.log(`Sessão de ${userId} está inativa`);

//setTimeout(avisaUsuario, 2000, userId);
setTimeout((userId) => console.log(`Sessão de ${userId} está inativa`), 4000, userId)