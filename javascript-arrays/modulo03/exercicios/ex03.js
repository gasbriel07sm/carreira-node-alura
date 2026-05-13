// Crie uma função que receba uma array de números inteiros e retorne a soma dos elementos.

const somaArray = array => {
    let soma = 0;
    for (let a of array) {
        soma += a;
    }
    return soma;
}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(`Soma dos elementos do array é igual a: ${somaArray(array)}`);
