// gerar um laco que tente advinhar um dado numero de 1 a 50
// e conte a quantidade de tentativas até o resultado

const numSecreto = 8;
let numAleatorio = 0;
let tentativas = 0;

while (numSecreto !== numAleatorio) {
    numAleatorio = Math.floor(Math.random() * (50 - 1 +1) + 1);
    tentativas++;
}
console.log(`${numSecreto} foi acertado com ${tentativas} tentativas`);

// laço enquanto não gerar um número par

let numRandom = 0;

do {
    numRandom = Math.floor(Math.random() * (50 - 1 +1) + 1);
    console.log(`${numRandom}`);
} while (numRandom % 2 !== 0);

console.log(`${numRandom}`);

// laço que recebe texto e verifique se é um palindromo
// imprimir o texto

const texto = 'alura';
let textoInvertido = '';

for (let i = texto.length - 1; i >= 0; i--) {
    textoInvertido += texto[i];
}

const resultado = texto === textoInvertido ? `${texto} é palíndromo` : `${texto} não é palíndromo`;

console.log(resultado);

