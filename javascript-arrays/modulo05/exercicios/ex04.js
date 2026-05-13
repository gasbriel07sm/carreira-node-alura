// 4 - Escreva uma função que receba um array de números e retorne um array contendo apenas os números pares.

const pares = array => {
    const numerosPares = array.filter(x => x % 2 === 0);
    return numerosPares;
}

const a1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(pares(a1));
