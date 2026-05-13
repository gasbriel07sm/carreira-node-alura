// Crie um programa que calcule a média dos números presentes em um array utilizando um loop for.

const array = [-10, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let soma = 0;

for (let a of array) {
    soma += a;
}

const media = soma / array.length;

console.log(`A média dos elementos do array é igual a: ${media.toFixed(2)}`)