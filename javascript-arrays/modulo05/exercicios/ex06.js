// 6 - Crie uma função que receba um array de números e retorne a soma de todos os elementos.

const soma = array => {
    const somaArray = array.reduce((acc, x) => acc += x, 0);
    return somaArray;
}

const a1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(soma(a1));
