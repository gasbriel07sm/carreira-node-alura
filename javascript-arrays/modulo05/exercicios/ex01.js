// 1 - Faça uma função que aceite vários arrays como argumentos e retorne um único array contendo todos os elementos dos arrays fornecidos, utilizando Spread Operator.

const juntaArray = (...args) => {
    return [].concat(...args);
}

const a1 = [1, 2, 3, 4];
const a2 = [5, 6, 7, 8];

console.log(juntaArray(a1, a2));